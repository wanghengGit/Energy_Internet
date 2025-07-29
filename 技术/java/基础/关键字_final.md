# final 关键字在 Java 中有 4 种用法

修饰类
修饰方法
修饰变量
修饰参数

1、final 关键字可以修饰类
final class A {
// ...
} 

被 final 修饰的类将不可以被其他类继承，表示当前类已经足够完美了，
已经不需要再被其他类继承了，如 JDK 源码中 String 类就是被 final 修饰的，表示 String 类不可以被其他类继承

2、final 关键字可以修饰方法
class A {
    public final void func() {
        // ...
    }
}

被 final 修饰的方法表示当前方法不可被修改，不可以被继承当前类的类重写

3、final 关键字可以修饰变量
class A {
    public void func() {
        private final int num = 0;
        num = 1; // err
    }
}

被 final 修饰的变量在进行初始化之后，不可以修改其内容，否则无法通过编译

4、final 关键字可以修饰参数
class A {
    public void func(final int a, int b) {
        a = 1; // err
        b = 1;
        System.out.println(a + b);
    }
}

被 final 修饰的参数 a 在整个 func 方法内不可以被修改，而 b 可以。
