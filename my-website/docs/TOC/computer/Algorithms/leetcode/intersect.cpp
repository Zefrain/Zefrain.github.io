#include <iostream>
using namespace std;

Class Solution{
  public: vector<int>
      intersect(vector<int> & nums1, vector<int>& nums2){
                vector<int> ret;

                sort(nums1.begin(), nums1.end());
                sort(nums2.begin(), nums2.end());

                for (vector<int>::iterator p1 = nums1.begin(); p1 != nums1.end();) {
                        for (vector<int>::iterator p2 = nums2.begin(); p2 != nums2.end();) {
                                if (*p1 == *p2) {
                                        ret.push_back(*p1);

                                        p1++;
                                        p2++;
                                } else if (*p1 > *p2) {
                                        // continue iterating nums1
                                        p2++;
                                } else {
                                        // break to iterate nums1
                                        p1++;
                                        break;
                                }
                        }
                }
                return ret;
      }
};
