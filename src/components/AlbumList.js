import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import AlbumDetails from './AlbumDetails';

class AlbumList extends Component {
    state = { albums: [] };
    
    componentWillMount(){
        fetch('https://rallycoding.herokuapp.com/api/music_albums')
            .then(res => res.json())
            .then(data => this.setState({ albums: data }));
        
    }

    renderAlbums() {
        return this.state.albums.map(a =>  
            <AlbumDetails key={a.title} album={a}/>
        );
    }

    render(){
        return(
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;