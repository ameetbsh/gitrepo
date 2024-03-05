using Core;

internal class Program
{
    private static void Main(string[] args)
    {
        for (int i = 0; i < 1000; i++)
        {
            Console.Write(Class1.FizzBuzzer(i) + " ");
        }
    }
}
