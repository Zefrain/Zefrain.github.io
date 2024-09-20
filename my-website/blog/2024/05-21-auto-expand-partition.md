---
Title: expand partition mounted /
Tags : [systemctl, partition]
---

# Manually expand partition scripts

## find partition for /

```sh
findmnt -nosource /

/dev/sda3
```

## split disk and partition number

```sh
growpart /dev/sda 3
```

## resize2fs	

```sh
resize2fs /dev/sda3
```

<!--truncate--> 

# Automatically expand partiton mounted `/`

## 1. write go code

```go
package main

import (
	"os"
	"os/exec"
	"strings"
)

func main() {
	if os.Geteuid() != 0 {
		// fmt.Println("This script must be run as root")
		os.Exit(1)
	}

	// Identify the device that / is mounted on
	out, err := exec.Command("df", "/").Output()
	if err != nil {
		// fmt.Println("Error running df command:", err)
		os.Exit(1)
	}

	// Parse the output to get the device
	lines := strings.Split(string(out), "\n")
	if len(lines) < 2 {
		// fmt.Println("Unexpected output from df command")
		os.Exit(1)
	}

	fields := strings.Fields(lines[1])
	if len(fields) < 1 {
		// fmt.Println("Unexpected output from df command")
		os.Exit(1)
	}

	device := fields[0]
	// fmt.Println("Device:", device)

	// Extract the base device and partition number
	var baseDevice, partNum string
	if strings.HasPrefix(device, "/dev/mapper/") {
		baseDevice = strings.TrimSuffix(device, "1")
		partNum = "1"
	} else {
		baseDevice = strings.TrimRightFunc(device, func(r rune) bool {
			return r >= '0' && r <= '9'
		})
		partNum = strings.TrimPrefix(device, baseDevice)
    
	}

	// Grow the partition
	if err := exec.Command("growpart", baseDevice, partNum).Run(); err != nil {
		// fmt.Println("Error running growpart command:", err)
		os.Exit(1)
	}

	// Resize the filesystem
	if err := exec.Command("resize2fs", device).Run(); err != nil {
		// fmt.Println("Error running resize2fs command:", err)
		os.Exit(1)
	}
}
```

## 2. build

```sh
go mod init expand_disk
go mod tidy

GOOS=linux GOARCH=amd64 go build .
```

## 3. write system service `expand_disk.service`

```conf
[Unit]
Description=Expand disk partition mounted on /
After=initrd-usr-fs.target

[Service]
ExecStart=/usr/local/bin/expand_disk

[Install]
WantedBy=multi-user.target
```

## 4. enable service

- Install to system

```sh
sudo cp expand_disk.service /usr/lib/system/systemd/
```

- Enable system 

```sh
sudo systemctl enable expand_disk
```

