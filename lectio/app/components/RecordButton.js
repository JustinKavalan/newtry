import React from 'react'
import { Text, Button, View} from 'react-native'
import RNFS from 'react-native-fs'
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
                    const path = Platform.select({
                        ios: 'lecture.m4a',
                        android: 'sdcard/lecture.mp4',
                      });
                    this.audioRecorderPlayer.startRecorder(path)
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
                    
                    RNFS.readFile(result, 'base64')
                        .then(result, () => {
                            fetch('http://heroku-api.sdfjhlkhjsdlfkj.com', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'text/plain'
                                },
                                body: result,
                            });
                        });
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