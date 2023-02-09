#include <linux/init.h>
#include <linux/module.h>
#include <linux/sched.h>

MODULE_LICENSE("Dua BSD/GPL");

static int hello_init(void)
{
	/* $current is the pointer of this process */
	printk(KERN_INFO "process name: %s\n", current->comm);

	printk(KERN_ALERT "Hello, world\n");
	return 0;
}


static void hello_exit(void)
{
	printk(KERN_ALERT "Gooldbye, curel world\n");
}

module_init(hello_init);
module_exit(hello_exit);

