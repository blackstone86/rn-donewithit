import React from 'react'
import renderer from 'react-test-renderer'
import AppFlatList from '../index'
import AppCategoryPickerItem from '../../../../components/AppCategoryPickerItem'
import COLORS from '../../../../config/colors'

jest.mock(
  '@expo/vector-icons/build/vendor/react-native-vector-icons/lib/create-icon-set.js',
  () => {
    return () => ''
  }
)

const props = {
  icon: false,
  placeholder: 'Category',
  options: [
    {
      label: 'Furniture',
      iconName: 'lamp',
      iconBackgroundColor: COLORS.PRIMARY,
      value: 1
    },
    {
      label: 'Cars',
      iconName: 'car',
      iconBackgroundColor: 'orange',
      value: 2
    },
    {
      label: 'Cameras',
      iconName: 'camera',
      iconBackgroundColor: 'gold',
      value: 3
    },
    {
      label: 'Games',
      iconName: 'cards-playing-outline',
      iconBackgroundColor: 'limegreen',
      value: 4
    },
    {
      label: 'Clothing',
      iconName: 'shoe-heel',
      iconBackgroundColor: 'mediumturquoise',
      value: 5
    },
    {
      label: 'Sports',
      iconName: 'basketball',
      iconBackgroundColor: 'cornflowerblue',
      value: 6
    },
    {
      label: 'Movies & Music',
      iconName: 'headphones',
      iconBackgroundColor: 'royalblue',
      value: 7
    },
    {
      label: 'Books',
      iconName: 'book-open-variant',
      iconBackgroundColor: 'mediumorchid',
      value: 8
    },
    {
      label: 'Other',
      iconName: 'application',
      iconBackgroundColor: 'lightslategrey',
      value: 9
    }
  ],
  numColumns: 3,
  hasItemSeparator: false
}

const value = 2

describe('AppFlatList', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <AppFlatList
          numColumns={props.numColumns}
          hasItemSeparator={props.hasItemSeparator}
          data={props.options}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => {
            return (
              <AppCategoryPickerItem
                selected={value === item.value}
                label={item.label}
                onPress={() => {
                  console.log(item)
                }}
                data={item}
              />
            )
          }}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
