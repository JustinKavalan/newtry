import React from 'react'
import { Text, Button, View} from 'react-native'

import AudioRecorderPlayer from 'react-native-audio-recorder-player'

const audioRecorderPlayer = new AudioRecorderPlayer();

export default class RecordButton extends React.Component {
    // private audioRecorderPlayer: AudioRecorderPlayer

    constructor(props: any) {
        super(props)
        this.audioRecorderPlayer = audioRecorderPlayer
    }

    render() {
        return (
            <View>
                <Button title="Record" onPress={() => {
                    this.audioRecorderPlayer.startRecorder()
                        .then((result) => {
                            console.log("Recording Success!: ", result)
                            this.audioRecorderPlayer.addRecordBackListener((e: any) => {
                                this.setState({
                                  recordSecs: e.current_position,
                                  recordTime: this.audioRecorderPlayer.mmssss(
                                    Math.floor(e.current_position),
                                  ),
                                });
                            });
                        })
                        .catch((error) => {console.log("RECORDING FAILED TO START: " + error)});
                }}></Button>
                <Button title="Stop" onPress={async () => {
                    const result = await this.audioRecorderPlayer.stopRecorder();
                    }
                }></Button>
                <Button title="Play" onPress={async () => {
                    const result = await this.audioRecorderPlayer.startPlayer();
                    }
                }></Button>
                <Button title="Stop Playback" onPress={async () => {
                    const result = await this.audioRecorderPlayer.stopPlayer();
                    }
                }></Button>
            </View>
        )
    }
}

// const RecordButton = (props) => {
//     console.log(audioRecorderPlayer);
//     return 
// }

// export default RecordButton;