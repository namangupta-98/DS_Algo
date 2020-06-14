import java.util.Scanner;
class computeLps{
    public static int [] clps(String subStr){
        int [] lps = new int[subStr.length()];
        lps[0] = 0;
        int i=1;
        int j = 0;
        while(i<subStr.length()){
            if(subStr.charAt(j)==subStr.charAt(i)){
                lps[i] = j+1;
                j++;
                i++;
            }
            else{
                if(j==0){
                    lps[i] = 0;
                    i++;
                }
                else{
                    j = lps[j-1];
                }                
            }
        }
        return lps;
    }
}
class Main{
    public static void main(String [] args){
        Scanner sc = new Scanner(System.in);
        String subStr = sc.nextLine();
        String str = sc.nextLine();
        computeLps l = new computeLps();
        int [] lps = l.clps(subStr);
        int j=0;
        int i=0;
        while(i<str.length()){
            if(j==subStr.length()-1){
                System.out.println("Yes");
                return;
            }
            if(subStr.charAt(j)==str.charAt(i)){
                i++;
                j++;
            }else{
                if(j==0){
                    i++;
                }
                else{
                    j=lps[j-1];
                }
            }
        }
        System.out.println("No");
    }
    
}