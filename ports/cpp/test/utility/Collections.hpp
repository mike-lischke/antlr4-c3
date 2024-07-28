#pragma once

#include <map>
#include <vector>

namespace c3::test {

template <class K, class V>
std::vector<K> Keys(const std::map<K, V>& map) {
  std::vector<K> keys;
  for (const auto& [key, value] : map) {
    keys.emplace_back(key);
  }
  return keys;
}

template <class T>
std::vector<T> Concat(std::vector<T> lhs, const std::vector<T>& rhs) {
  for (const auto& element : rhs) {
    lhs.emplace_back(element);
  }
  return lhs;
}

}  // namespace c3::test
