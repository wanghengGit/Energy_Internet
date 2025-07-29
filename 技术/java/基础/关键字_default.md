# default
default是在java8中引入的关键字，也可称为Virtual extension methods——虚拟扩展方法

它是指，在接口内部包含了一些默认的方法实现（也就是接口中可以包含方法体，这打破了Java之前版本对接口的语法限制），
从而使得接口在进行扩展的时候，不会破坏与接口相关的实现类代码。

我们原来在写Java接口的时候，是不能有方法体的函数，就类似于C++中的虚函数，
default关键字在接口中修饰方法时，方法可以有方法体。

interface test{
	default public void print() {
		System.out.println("This is a interface with default");
	}
}

interface Test01{
	default public void print() {
		System.out.println("This is the second interface with default");
	}
}

类里同时实现这两个接口,我们就会发现编译器会报错，编译无法通过, 编译器被搞混了，
对于新创建的对象去实现的print方法，编译器不知道该去实现哪个接口的print方法。
public class Defaulttest implements Test,Test01 {
public static void main(String[] args) {
	Defaulttest test01 =new Defaulttest();
	test01.print();
}
}
然而我就想实现这个print方法那咋办呀？在Defaulttest类中重写print方法来达到我们的目的。
public class Defaulttest implements Test,Test01 {
	public void print() {
		System.out.println("The print() belongs to Defaulttest");
	}
public static void main(String[] args) {
	Defaulttest test01 =new Defaulttest();
	test01.print();
}
}
如果我这个时候继续创建一个类来继承我的这一个Defaulttest类，如下：
class Defaulttest02 extends Defaulttest implements Test{
public static void main(String[] args) {
	Defaulttest02 test=new Defaulttest02();
	test.print();
	
}
}

执行的是Defaulttest类里的print还是接口Test里的print？答案是Defaulttest类里的print方法, 类优先于接口


该特性出现的原因：
原来的接口是个双刃剑，好处是面向抽象而不是面向具体编程，
缺陷是，当需要修改接口时候，需要修改全部实现该接口的类，
目前的java8之前的集合框架没有foreach方法，
通常能想到的解决办法是在JDK里给相关的接口添加新的方法及实现。
然而，对于已经发布的版本，是没法在给接口添加新方法的同时不影响已有的实现。
所以引进的默认方法。他们的目的是为了解决接口的修改与现有的实现不兼容的问题。


此外，static关键字，也可以在接口中定义静态方法的实现，
接口的静态方法不能被接口实现类实现,静态方法在接口中必须有实现体（一般没必要这样做）
public interface TestDefault {
 
    static void testDefault() {
        System.out.print("hello ");
    }
 
    static void main(String[] args) {
        TestDefault.testDefault();
    }
}
 
输出：
hello 

