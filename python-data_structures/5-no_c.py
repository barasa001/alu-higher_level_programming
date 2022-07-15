#!/usr/bin/python3



def no_c(my_string):
    size = len(my_string)
    j = 0
    new_sTr = my_string[:]
    for i in range(size):
        if (my_string[i] == 'c'or my_string[i] == 'C'):
            new_sTr = new_sTr[:(i - j)] + my_string[(i + j):]
            j += 1
    return (new_sTr)
