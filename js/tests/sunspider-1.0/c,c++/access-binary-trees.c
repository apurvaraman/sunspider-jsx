/* The Great Computer Language Shootout
   http://shootout.alioth.debian.org/
   contributed by Isaac Gouy */

struct TreeNode
{
   struct TreeNode *left;
   struct TreeNode *right;
   int item;
};

int itemCheck(struct TreeNode *node) {
    if(node->left == NULL) {
        return node->item;
    }
    else {
        return node->item + itemCheck(node->left) - itemCheck(node->right);
    }
}


struct TreeNode * bottomUpTree(int item, int depth){
   if (depth>0){
      struct TreeNode node;
      node.left = bottomUpTree(2*item-1, depth-1);
      node.right =  bottomUpTree(2*item-1, depth-1);
      node.item = item;
      return *node;
   }
   else {
      struct TreeNode node2;
      node2.item = item;
      return *node2;
   }
}

int main() {
    int ret;

    for (int n = 4; n <= 7; n++ ) {
        int minDepth = 4;
        int maxDepth;
        if(minDepth + 2 >= n) {
            maxDepth = minDepth + 2;
        }
        else {
            maxDepth = n;
        }
        int stretchDepth = maxDepth + 1;
        
        int check = itemCheck(bottomUpTree(0,stretchDepth));
        
        struct TreeNode *longLivedTree = bottomUpTree(0,maxDepth);
        for (int depth = minDepth; depth<=maxDepth; depth+=2){
            int iterations = 1 << (maxDepth - depth + minDepth);

            check = 0;
            for (int i = 1; i<=iterations; i++){
                check += itemCheck(bottomUpTree(i,depth));
                check += itemCheck(bottomUpTree(-i,depth));
            }
        }

        ret = itemCheck(*longLivedTree);
    }
    return ret;  // returns -32
}