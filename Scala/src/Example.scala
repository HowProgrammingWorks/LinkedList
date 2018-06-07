import doubleLinked.{DNil, DoubleLinked}
import singleLinked.{SNil, SingleLinked}

object Example {
  def main(args: Array[String]): Unit = {
    val list: SingleLinked[Int] = 1 :: 2 :: 3 :: SNil

    list.foreach(item => print(s"$item\t"))
    println()

    list.map(_ + 1).foreach(item => print(s"$item\t"))
    println()

    list.flatMap(item => item :: item :: singleLinked.SNil).foreach(item => print(s"$item\t"))
    println()


    val list2: DoubleLinked[Int] = 1 :: 2 :: 3 :: DNil

    list2.foreach(item => print(s"$item\t"))
    println()

    list2.map(_ + 1).foreach(item => print(s"$item\t"))
    println()
  }
}