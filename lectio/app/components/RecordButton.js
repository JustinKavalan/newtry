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
                        .then((result) => {
                            console.log("File read successfully! Bleh: ", result);
                            fetch('http://ec2-13-58-106-187.us-east-2.compute.amazonaws.com:5000', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'text/plain'
                                },
                                body: result,
                            }).then((result) => {
                                console.log("Audio file posted successfully! Happy days. Here's the result: ", result)
                            }).catch((error) => {
                                console.log("Sad, your post failed. This might help: ", error);
                            })
                        })
                        .catch((error) => {
                            console.log("File reading failed :( Look here: ", error);
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