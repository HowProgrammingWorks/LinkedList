module SingleLinked
  ( List(..)
  , Human(..)
  , addToEnd
  , init
  , fromList
  ) where

import Prelude hiding (init, fromList)

data List a = a :+: List a
            | Empty
  deriving (Show)
infixr :+:

instance Functor List where
  fmap f Empty = Empty
  fmap f (x :+: xs) = f x :+: fmap f xs

data Human = Human {
  getName :: String
} deriving (Show)

addToEnd :: a -> List a -> List a
addToEnd el Empty    = el :+: Empty
addToEnd el (x:+:xs) = x :+: addToEnd el xs

init :: List a -> List a
init Empty         = error "init on empty list"
init (x :+: Empty) = Empty
init (x :+: xs)    = x :+: init xs

fromList :: [a] -> List a
fromList = foldr (:+:) Empty

main = do
  let (n1 :+: n2 :+: n3 :+: _) = fmap Human . fromList
                               $ ["first", "second", "third"]
  print n1
  print n2
  print n3
