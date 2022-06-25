#include <dirent.h>

#include "apue.h"

extern char *__progname;

int main(int argc, char *argv[]) {
    DIR           *dp;
    struct dirent *dirp;

    if (argc != 2) {
        err_quit("usage: %s directory_name", __progname);
    }
    if ((dp = opendir(argv[1])) == NULL) {
        err_sys("can't open %ls", argv[1]);
    }

    while ((dirp = readdir(dp)) != NULL) {
        if (strcoll(dirp->d_name, ".") != 0 &&
            strcoll(dirp->d_name, "..") != 0) {
            printf("%s\n", dirp->d_name);
        }
    }

    closedir(dp);
    return 0;
}
