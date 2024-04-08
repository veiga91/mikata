import { Navigation } from 'react-native-navigation'
import { Button, ButtonSize } from '../components'
import { MODALS } from '../navigation/navigationComponents'
import { View, useWindowDimensions } from 'react-native'
import { usePetApi } from '../api'
import { PetList } from '../containers'

export function Home(): React.JSX.Element {
  const {height} = useWindowDimensions();
  const { allPets, petById } = usePetApi()
  const { isPending, isError, data, error } = allPets();
  const { data: pet } = petById("2c2ef716-feb4-4ed0-a2e7-6c02aa717491");

  return (
    <View className="relative flex-1">
      <PetList data={data} />
     <Button.Contained size={ButtonSize.SM} className='mt-3 rounded-full absolute bottom-4 right-2' onPress={() => {
      Navigation.showModal(
        {
          stack: {
            children: [
              {
                component: {
                  name: MODALS.REGISTER_PET,
                  options: {
                    topBar: {
                      visible: false,
                    },
                    animations: {
                      showModal: {
                        translationY: {
                          to: height * 0.10,
                          from: height,
                          duration: 300,
                          interpolation: { type: 'decelerate' },
                        },
                      },
                      dismissModal: {
                        translationY: {
                          from: height * 0.10,
                          to: height,
                          duration: 300,
                          interpolation: { type: 'decelerate' },
                        },
                      }
                    }
                  }
                }
              }
            ]
          }
        }
      )
     }} label="add"/>
    </View>
  )
}