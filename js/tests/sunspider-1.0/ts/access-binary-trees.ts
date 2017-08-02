/* The Great Computer Language Shootout
   http://shootout.alioth.debian.org/
   contributed by Isaac Gouy */

class TreeNode {
   left: TreeNode;
   right: TreeNode;
   item: int;
   constructor(left:TreeNode, right:TreeNode, item: int) {
       this.left = left;
       this.right = right;
       this.item = item;
   }
   itemCheck(): int {
       if(this.left == null) {
           return this.item;
       }
       else {
           return this.item + this.left.itemCheck() - this.right.itemCheck();
       }
   }
}



function bottomUpTree(item: int,depth: int): TreeNode{
   if (depth>0){
      return new TreeNode(bottomUpTree(2*item-1, depth-1), bottomUpTree(2*item, depth-1), item);
   }
   else {
      return new TreeNode(null,null,item);
   }
}

export function main(): int {
    var ret: int;

    for ( let n: int = 4; n <= 7; n++ ) {
        let minDepth: int = 4;
        let maxDepth: int;
        if(minDepth + 2 >= n) {
            maxDepth = minDepth + 2;
        }
        else {
            maxDepth = n;
        }
        let stretchDepth: int = maxDepth + 1;
        
        let check: int = bottomUpTree(0,stretchDepth).itemCheck();
        
        let longLivedTree: TreeNode = bottomUpTree(0,maxDepth);
        for (let depth: int = minDepth; depth<=maxDepth; depth+=2){
            let iterations: int = 1 << (maxDepth - depth + minDepth);

            check = 0;
            for (let i: int = 1; i<=iterations; i++){
                check += bottomUpTree(i,depth).itemCheck();
                check += bottomUpTree(-i,depth).itemCheck();
            }
        }

        ret = longLivedTree.itemCheck();
    }
    return ret;  // returns -32
}