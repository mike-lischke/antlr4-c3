#pragma once

#include <gmock/gmock.h>
#include <gtest/gtest.h>

#include "AntlrPipeline.hpp"
#include "Collections.hpp"

namespace c3::test {

using testing::ElementsAre;
using testing::ElementsAreArray;
using testing::IsSupersetOf;
using testing::UnorderedElementsAre;
using testing::UnorderedElementsAreArray;

}  // namespace c3::test
