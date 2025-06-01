# abstract是java中用来修饰类和方法一个关键字

## 为什么要用
1 当我们不想类能够实例化时(类实例化没有意义,例如Animal类),就在class前面加上abstract关键字

2 当我们不想方法能够被对象.方式调用并且要求能实例化的子类一定要重写该方法时,就把abtract写在方法名的前面(抽象方法所在的类一定是抽象类)

3 人们为了更高级别的抽象,这个抽象出来的类只是提供一个模板,该类去实例化对象的话在现实生活中没有什么意义,因此需要把该类用abstract关键字修饰

4 规范子类一定要有该行为,具体的行为由子类的类型去决定


（1）修饰类
a 语法
权限修饰符 abstract class 类名{
}

b 示例代码
Animal类
package Work2;
public abstract class Animal {
    private String name;
    //抽象类里面的构造方法是为了子类服务的
    public Animal() {
    }

    public Animal(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    //每个具体动物叫声都不一样,没有通用版本,就没有必要有方法体了
    public abstract void say();

}

Cat类
package Work2;

public class Cat extends Animal{
    public Cat() {
    }

    public Cat(String name) {
        super(name);
    }

    @Override
    public void say() {
        //实际是调用父类型特征区里面的getName()方法
        System.out.println("名字为:"+getName()+"的猫咪在喵喵喵");
    }
}

（2）修饰方法
a 语法
权限修饰符 abstract 方法返回值类型 方法名(形参列表);
//抽象方法是没有方法体的
//能实例化对象的类继承抽象类时,会重写抽象类的所有抽象方法

b 示例代码
Animal类
package Work2;
public abstract class Animal {
    private String name;
    //抽象类里面的构造方法是为了子类服务的
    public Animal() {
    }

    public Animal(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    //每个具体的动物的吃法不一样
    public abstract void eat();

}

Cat类
package Work2;
public class Cat extends Animal{
    public Cat() {
    }

    public Cat(String name) {
        super(name);
    }

    @Override
    public void eat() {
        //实际是调用父类型特征区里面的getName()方法
        System.out.println("名字为:"+getName()+"的猫咪在吃鱼");
    }
}


## 总结
1、抽象方法所在的类一定是抽象类,抽象类可以一个抽象方法都没有。
抽象方法是没有方法体的方法,是不能通过对象名.方法的方式去调用的,
而若所在的类不是抽象类,意味着它可以实例化对象,实例化对象后就可以通过对象名.方法名来调用方法,
这岂不是自相矛盾吗?所以抽象方法所在的类一定是抽象类
抽象类只是让该类不能实例化对象,里面的抽象方法有还是没有是不影响的，所以抽象类可以一个抽象方法都没有

2、抽象方法一定要求被非抽象的子类重写,抽象子类可以不重写
抽象方法重写的目的是规范子类,是你一定要去具体实现的,若一直都是抽象子类继承的话,那这样设计就没有任何意义了。
其实,抽象方法会强制非抽象的子类去重写该方法,不重写的话编译就通不过。

3、抽象类可以继承抽象类或者非抽象类吗?
你就把抽象类当成一个特殊的类就行,特殊在于该类不能实例化对象,但是继承什么的非抽象的规则是一样的,
你不显示的继承父类时,它默认继承于java.lang.Object

抽象类继承抽象类
package Work2;
public class Test {
    public static void main(String[] args) {
       C c=new C();
       c.show1();
       c.show2();
    }
}
abstract class A{
   public abstract void show1();
}
abstract class B extends A{
    public abstract void show2();
}
class C extends B{
    @Override
    public void show1() {
        System.out.println("继承自A类的方法");
    }

    @Override
    public void show2() {
        System.out.println("继承自B类的方法");
    }
}

4、抽象方法可以在抽象类中重载吗?
解答
可以的,抽象方法可以看成一个特殊的方法,特殊在它要求继承它的非抽象子类一定要重写实现该方法,
至于其他的部分其实和普通方法是一样的用法,因此也可以实现方法的重载。
package Work2;
public abstract class Animal{
    private String name;
    //抽象类里面的构造方法是为了子类服务的
    public Animal() {
    }

    public Animal(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    //测试抽象方法是否可以被重载,重载只需要方法名相同,形参列表不同(个数、类型、顺序)
    public abstract int sum(int a,int b);
    public abstract double sum(double a,int b);
    public abstract double sum(int a,int b,double c);
    public abstract double sum(double c,int a,int b);
}

5、抽象类一定有构造方法,这是为了子类而服务的
因为子类继承抽象父类后,调用自己的构造方法前,会默认调用父类构造方法,模拟的是先有父后又子,
而调用的父类构造方法是给子类的父类型特征区里面继承过来的属性进行初始化赋值。
因此可以说是为了子类而服务的


