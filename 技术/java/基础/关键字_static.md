# static

修饰成员变量 静态属性
修饰成员方法 静态方法
修饰代码块 静态代码块

1、static修饰成员变量
静态成员变量:
static String name;

语法格式:
static 数据类型  变量名;

注意事项:
1.使用static修饰的变量叫静态变量
2.代码中对象还没有创建的时候，如果加载了类，static修饰的属性已经存在了，和对象没有关系。
 
class Person {
    String name;
    int age;
    static String country;
}
public class Demo2 {
    public static void main(String[] args) {
        Person sb = new Person();
        sb.name = "张三";
        sb.age = 23;
        Person.country = "中国";
        //The static field Person.country 
        //should be accessed in a static way
        System.out.println(sb.country);//中国
        System.out.println(Person.country);//in a static way
        sb.country = "PRC";
        System.out.println(Person.country);//PRC
    }
​
}
总结：
以后记住：
    类.静态属性即可

2、static修饰成员方法
静态方法
语法格式:
public static 返回值 方法的名字 (参数列表) {}

调用静态方法：
类.方法名字();
​
class Dog {
    public void eat () {
        System.out.println("普通的成员方法");
    }
    public static void sleep () {
        System.out.println("睡吧不用看家了");
    }
}
public class Demo3 {
    public static void main(String[] args) {
        Dog.sleep();
        //Dog.eat();只能拿对象来调用这个方法eat
        Demo3.test();
    }
    public static void test () {
        System.out.println("嘻嘻");
    }
​
}

3、static修饰代码块
语法格式: 静态代码块
static {
    语句体
}
只要这个类加载，那么静态代码块一定会执行

执行顺序: 静态代码块-》构造代码块-》构造方法 
​
class Cat {
    public Cat () {
        System.out.println("无参构造方法");
    }
    {
        System.out.println("构造代码块");
    }
    static {
        System.out.println("静态的代码块");
    }
}
public class Demo4 {
    public static void main(String[] args) {
        Cat cat = new Cat();
    }
​
}
​