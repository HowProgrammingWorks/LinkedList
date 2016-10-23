module SingleLinked
  ( List(..)
  , Human(..)
  , addToEnd
  , initL
  ) where

data List a = a :+: List a
            | Empty
  deriving (Show)
infixr :+:

data Human = Human {
  getName :: String
} deriving (Show)

addToEnd :: a -> List a -> List a
addToEnd el Empty    = el :+: Empty
addToEnd el (x:+:xs) = x :+: addToEnd el xs

initL :: List a -> List a
initL Empty = error "init on empty list"
initL (x :+: y :+: Empty) = x :+: Empty
initL (x :+: xs) = x :+: initL xs

n1 = Human "first"  :+: Empty
n2 = Human "second" :+: n1
n3 = Human "third"  :+: n2

main = do
  print n1
  print n2
  print n3
