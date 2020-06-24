import java.util.Scanner;
public class pascal {
    public static void main(String [] args){
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int [] prev = new int[n];
        prev[0] = 1;
        for(int i=0;i<n;i++){
            int [] arr = new int[n];
            for (int j=0;j<=i;j++){
                if (j==0 || j==n-1) arr[j] = 1;
                else arr[j] = prev[j-1] + prev[j];
            }
            prev = arr;
            for(int k=0;k<=i;k++)
                System.out.print(prev[k]+" ");

            System.out.print("\n");
        }
    }
}
