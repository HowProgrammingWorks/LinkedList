package singleLinked


sealed trait SingleLinked[+A] {
  def ::[B >: A](x: B): SingleLinked[B] = {
    SingleLinked.::(x, this)
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
case class Node[+A](value: A, next: SingleLinked[A]) extends SingleLinked[A]


object SingleLinked {
  def empty[A]: SingleLinked[A] = SNil

  def apply[A](values: A*): SingleLinked[A] = values.foldLeft(SingleLinked.empty[A])((list, item) => item :: list)

  def ::[A](x: A, list: SingleLinked[A]): SingleLinked[A] = Node(x, list)

  def foreach[A](list: SingleLinked[A])(f: A => Unit): Unit = {
    list match {
      case SNil =>
      case Node(x, next) =>
        f(x)
        next.foreach(f)
    }
  }

  def map[A, B](list: SingleLinked[A])(f: A => B): SingleLinked[B] = {
    list match {
      case SNil => SNil
      case Node(x, next) => Node(f(x), next.map(f))
    }
  }

  def merge[A](list1: SingleLinked[A], list2: SingleLinked[A]): SingleLinked[A] = {
    list1 match {
      case SNil => list2
      case Node(x, next) => Node(x, merge(next, list2))
    }
  }

  def flatMap[A, B](list: SingleLinked[A])(f: A => SingleLinked[B]): SingleLinked[B] = {
    list match {
      case SNil => SNil
      case Node(x, next) => merge(f(x), next.flatMap(f))
    }
  }
}