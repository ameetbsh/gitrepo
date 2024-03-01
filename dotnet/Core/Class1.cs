namespace Core;

public class Class1
{
    public static string? FizzBuzzer(int v)
    {
        if (v <= 0 || v % 15 == 0)
            return "FizzBuzz";
        else if (v % 3 == 0)
        {
            return "Fizz";
        }
        else if (v % 5 == 0)
        {
            return "Buzz";
        }
        else
            return v.ToString();
    }
}
