package beat_the_leet

import (
	"sort"
)

// 97ms, 9.8MB
func longestConsecutive(nums []int) int {
	if len(nums) < 2 {
		return len(nums)
	}
	sort.Ints(nums)
	curLen := 1
	maxLen := 0
	for idx := 0; idx < len(nums)-1; idx++ {
		diff := nums[idx+1] - nums[idx]
		if diff == 1 {
			curLen = curLen + 1
		} else if diff > 1 {
			if curLen > maxLen {
				maxLen = curLen
			}
			curLen = 1
		}
	}
	if curLen > maxLen {
		maxLen = curLen
	}
	return maxLen
}

// 143ms, 11.1MB
func longestConsecutiveMap(nums []int) int {
	if len(nums) < 2 {
		return len(nums)
	}
	set := make(map[int]struct{})
	maxLen := 1
	for _, num := range nums {
		set[num] = struct{}{}
	}
	for num, _ := range set {
		if _, ok := set[num-1]; !ok {
			curLen := 1
			for idx := 1; ; idx++ {
				if _, ok := set[num+idx]; !ok {
					break
				} else {
					curLen += 1
				}
			}
			if curLen > maxLen {
				maxLen = curLen
			}
		}
	}
	return maxLen
}
