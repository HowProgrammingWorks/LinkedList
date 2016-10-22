module DoubleLinked where

import SingleLinked

data DList a = DList {
  getDirect  :: List a,
  getInverse :: List a
}

empty :: DList a
empty = DList Empty Empty

push :: a -> DList a -> DList a
push el list = list {
  getDirect  = addToEnd el $ getDirect list,
  getInverse = el :+: getInverse list
}

pop :: DList a -> (a, DList a)
pop (DList Empty Empty)     = error "pop on empty list"
pop (DList Empty _    )     = error "wrong structured list"
pop (DList _     Empty)     = error "wrong structured list"
pop (DList dir (el:+:rest)) = (el, DList (initL dir) rest)

node :: a -> DList a
node = (`push` empty)

main = do
  let human1 = Human "first"
      human2 = Human "second"
      human3 = Human "third"
      list3  = push human3 . push human2 . push human1 
             $ empty
      (third,  list2)  = pop list3
      (second, list1)  = pop list2
      (first,  list0)  = pop list1
      (zero,   list0') = pop list0
      list1' = push (Human "uno") list1
      list2' = push (Human "due") list2
      (second', list1'') = pop list2'
      list2'' = push (Human "tre") list1''
      (second'', list1''') = pop list2''
      (first',   _       ) = pop list1'''
  print third
  print second
  print first
  print second'
  print second''
  print first'
