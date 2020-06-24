import java.util.Scanner;

public class kadane {
    public static int kadane(int [] arr){
        int max_so_far = 0;
        int max_ending_here = 0;
        int start = 0;
        int end = 0;

        for(int i=0;i<arr.length;i++){
            max_ending_here += arr[i];
            if(max_ending_here < 0){
                max_ending_here = 0;
            }
            else if(max_so_far < max_ending_here){
                max_so_far = max_ending_here;
            }
        }
        return max_so_far;
    }
    public static void main(String [] args){
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int [] arr = new int[n];
        for(int i=0;i<n;i++){
            arr[i] = sc.nextInt();
        }
        System.out.println(kadane(arr));
    }
}
