import java.util.Scanner;

public class nextPermuatation {
    public static int [] reverse(int [] arr, int start, int end){
        while(start<end){
            int temp  = arr[start];
            arr[start++] = arr[end];
            arr[end--] = temp;
        }
        return arr;
    }
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int [] arr = new int[n];

        for(int i=0;i<n;i++)
            arr[i] = sc.nextInt();

        int k = arr.length-2;

        while(k>=0 && arr[k] >= arr[k+1]){
            k-=1;
        }
        if(k==-1) {
            arr = reverse(arr, 0, arr.length - 1);
            for (int i = 0; i < arr.length; i++)
                System.out.print(arr[i] + " ");
            return;
        }
        int l = k+1;
        for(int i = k+1;i<arr.length;i++)
            if(arr[i]>arr[k] && arr[i]<=arr[l])
                l = i;

        int temp = arr[k];
        arr[k] = arr[l];
        arr[l] = temp;

        arr = reverse(arr,k+1,arr.length-1);

        for (int i = 0; i < arr.length; i++)
            System.out.print(arr[i] + " ");
        return;
    }
}
