/**
  * In case of double linked list we have to ignore some principles of functional programming
  * and we should make some fields of Node class mutable
  * In other case we will have to recreate all list after any change
  */

sealed trait DoubleLinked[+A] {
  def ::[B >: A](value: B): DoubleLinked[B] = {
    DoubleLinked.append(value, this)
  }

  def foreach[B >: A](f: B => Unit): Unit = {
    DoubleLinked.foreach(this)(f)
  }

  def map[B](f: A => B): DoubleLinked[B] = {
    DoubleLinked.map(this, DNil)(f)
  }
}


case object DNil extends DoubleLinked[Nothing]
class DNode[A](var prev: DoubleLinked[A], val value: A, var next: DoubleLinked[A]) extends DoubleLinked[A]


object DoubleLinked {
  def empty[A]: DoubleLinked[A] = DNil

  def apply[A](values: A*): DoubleLinked[A] = values.foldLeft(DoubleLinked.empty[A])((list, item) => item :: list)

  def append[A](value: A, list: DoubleLinked[A]): DoubleLinked[A] = {
    val node = new DNode(DNil, value, list)
    list match {
      case DNil => DNil
      case l: DNode[A] =>
        l.prev = node
    }

    node
  }

  def foreach[A](list: DoubleLinked[A])(f: A => Unit): Unit = {
    list match {
      case DNil =>
      case l: DNode[A] =>
        f(l.value)
        l.next.foreach(f)
    }
  }

  def map[A, B](list: DoubleLinked[A], prev: DoubleLinked[B])(f: A => B): DoubleLinked[B] = {
    list match {
      case DNil => DNil
      case l: DNode[A] =>
        new DNode(prev, f(l.value), map(l.next, prev)(f))
    }
  }
}

object DoublyExample {

  def main(args: Array[String]): Unit = {
    val list2: DoubleLinked[Int] = 1 :: 2 :: 3 :: DNil

    list2.foreach(item => print(s"$item\t"))
    println()

    list2.map(_ + 1).foreach(item => print(s"$item\t"))
    println()
  }
}
