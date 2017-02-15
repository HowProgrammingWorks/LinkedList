module DoubleLinked where

import Control.Monad
import Prelude hiding (fromList)

import SingleLinked as L hiding (fromList)

data DList a = DList {
  getDirect  :: List a,
  getInverse :: List a
}

instance Functor DList where
  fmap f (DList dir inv) = DList (appF dir) (appF inv)
    where appF = fmap f

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
pop (DList dir (el:+:rest)) = (el, DList (L.init dir) rest)

fromList :: [a] -> DList a
fromList = foldl (flip push) empty

node :: a -> DList a
node = (`push` empty)

main = do
  let list3 = Human <$> fromList ["first", "second", "third"]
      printPop list = let (el, list') = pop list
                      in print el >> return list'
      nPrintPop n = foldr (>=>) return 
                  $ replicate n printPop
      pushHuman name = return . push (Human name)
  foldr (>=>) return [
      nPrintPop 3,
      pushHuman "uno",
      pushHuman "due",
      printPop,
      pushHuman "tre",
      nPrintPop 2
    ] list3  
  return ()
