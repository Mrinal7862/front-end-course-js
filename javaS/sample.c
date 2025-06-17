#include <stdio.h> 

void arr(){
    int array[7] = {1, 2, 3, 4, 5, 6, 7};

    for(int i=0; i<7; i++){
        printf("%d\n", array[i]);
    }
}

int main(){
    arr();
    return 0;
}