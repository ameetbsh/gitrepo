using Core;

namespace Test.MS;

[TestClass]
public class UnitTest1
{
    [TestMethod]
    public void TestMethod1()
    {
        Assert.AreEqual("FizzBuzz", Class1.FizzBuzzer(0));
        Assert.AreEqual("FizzBuzz", Class1.FizzBuzzer(-1));
        Assert.AreEqual("FizzBuzz", Class1.FizzBuzzer(15));
        Assert.AreEqual("FizzBuzz", Class1.FizzBuzzer(30));
        Assert.AreEqual("FizzBuzz", Class1.FizzBuzzer(45));
        Assert.AreEqual("FizzBuzz", Class1.FizzBuzzer(60));

        Assert.AreEqual("1", Class1.FizzBuzzer(1));
        Assert.AreEqual("2", Class1.FizzBuzzer(2));
        Assert.AreEqual("4", Class1.FizzBuzzer(4));
        Assert.AreEqual("7", Class1.FizzBuzzer(7));
        Assert.AreEqual("8", Class1.FizzBuzzer(8));

        Assert.AreEqual("Fizz", Class1.FizzBuzzer(3));
        Assert.AreEqual("Fizz", Class1.FizzBuzzer(6));
        Assert.AreEqual("Fizz", Class1.FizzBuzzer(9));
        Assert.AreEqual("Fizz", Class1.FizzBuzzer(12));

        Assert.AreEqual("Buzz", Class1.FizzBuzzer(5));
        Assert.AreEqual("Buzz", Class1.FizzBuzzer(10));
        Assert.AreEqual("Buzz", Class1.FizzBuzzer(20));
        Assert.AreEqual("Buzz", Class1.FizzBuzzer(25));
        Assert.AreEqual("Buzz", Class1.FizzBuzzer(35));
        Assert.AreEqual("Buzz", Class1.FizzBuzzer(50));
    }
}
