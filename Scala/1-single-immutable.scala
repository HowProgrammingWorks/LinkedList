sealed trait SingleLinked[+A] {
  def ::[B >: A](value: B): SingleLinked[B] = {
    SingleLinked.::(value, this)
  }

  def foreach[B >: A](f: B => Unit): Unit = {
    SingleLinked.foreach(this)(f)
  }

  def map[B](f: A => B): SingleLinked[B] = {
    SingleLinked.map(this)(f)
  }

  def flatMap[B](f: A => SingleLinked[B]): SingleLinked[B] = {
    SingleLinked.flatMap(this)(f)
  }
}


case object SNil extends SingleLinked[Nothing]
case class SNode[+A](value: A, tail: SingleLinked[A]) extends SingleLinked[A]


object SingleLinked {
  def empty[A]: SingleLinked[A] = SNil

  def apply[A](values: A*): SingleLinked[A] = values.foldLeft(SingleLinked.empty[A])((list, item) => item :: list)

  def ::[A](value: A, list: SingleLinked[A]): SingleLinked[A] = SNode(value, list)

  def foreach[A](list: SingleLinked[A])(f: A => Unit): Unit = {
    list match {
      case SNil =>
      case SNode(value, tail) =>
        f(value)
        tail.foreach(f)
    }
  }

  def map[A, B](list: SingleLinked[A])(f: A => B): SingleLinked[B] = {
    list match {
      case SNil => SNil
      case SNode(value, tail) => SNode(f(value), tail.map(f))
    }
  }

  def merge[A](list1: SingleLinked[A], list2: SingleLinked[A]): SingleLinked[A] = {
    list1 match {
      case SNil => list2
      case SNode(value, tail) => SNode(value, merge(tail, list2))
    }
  }

  def flatMap[A, B](list: SingleLinked[A])(f: A => SingleLinked[B]): SingleLinked[B] = {
    list match {
      case SNil => SNil
      case SNode(value, tail) => merge(f(value), tail.flatMap(f))
    }
  }
}

object SingleExample {

  def main(args: Array[String]): Unit = {
    val list: SingleLinked[Int] = 1 :: 2 :: 3 :: SNil

    list.foreach(item => print(s"$item\t"))
    println()

    list.map(_ + 1).foreach(item => print(s"$item\t"))
    println()

    list.flatMap(item => item :: item :: SNil).foreach(item => print(s"$item\t"))
    println()
  }
}
