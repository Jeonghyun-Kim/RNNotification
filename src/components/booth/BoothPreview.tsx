import React from 'react';
import {
  View,
  StyleSheet,
  StyleProp,
  ViewProps,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import { useNavigation } from 'react-native-navigation-hooks/dist';
import Video from 'react-native-video';

import { Arrow, Heart, ViewIcon } from 'components/icons';
import { commonStyles } from 'styles';

const s = StyleSheet.create({
  root: {
    paddingBottom: 32,
  },
  videoPlayer: {},
  profile: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 16,
    paddingHorizontal: 16,
    // backgroundColor:
    //   process.env.NODE_ENV === 'development' ? 'orange' : undefined,
  },
  artworkList: {
    height: 96,
    paddingHorizontal: 16,
    justifyContent: 'flex-start',
    // backgroundColor:
    //   process.env.NODE_ENV === 'development' ? 'skyblue' : undefined,
  },
  artworkImage: {
    height: 96,
    marginRight: 4,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  infoBox: {
    flex: 1,
    justifyContent: 'space-around',
    height: 40,
    marginLeft: 8,
  },
  counterBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
  },
  count: {
    marginLeft: 4,
    color: '#868e96',
  },
  size14: {
    fontSize: 14,
    fontFamily: 'NotoSansCJKkr-Regular',
  },
  size12: {
    fontSize: 12,
    fontFamily: 'NotoSansCJKkr-Regular',
  },
});

interface Props extends ViewProps {
  booth: BoothData;
  play: boolean;
  style?: StyleProp<any>;
}
const BoothPreview: React.FC<Props> = ({ booth, play, style, ...props }) => {
  const { push } = useNavigation();
  const { width: innerWidth } = Dimensions.get('window');
  // const refPlayer = React.useRef<Video>(null);

  return (
    <View style={[s.root, { width: innerWidth }, style]} {...props}>
      <Video
        // ref={refPlayer}
        source={{ uri: booth.repVideo.url }}
        muted
        repeat
        paused={!play}
        resizeMode="cover"
        playWhenInactive
        style={[
          s.videoPlayer,
          { width: innerWidth, height: innerWidth * (5 / 4) },
        ]}
      />
      <View style={s.profile}>
        <Image source={{ uri: booth.repImage.url }} style={s.profileImage} />
        <View style={s.infoBox}>
          <Text style={s.size14}>{booth.title}</Text>
          <View style={commonStyles.flexRow}>
            <Text style={s.size12}>{booth.artist.name}</Text>
            <View style={s.counterBox}>
              <ViewIcon size={12} color="#868e96" />
              <Text style={[s.size12, s.count]}>{booth.counts.view}</Text>
            </View>
            <View style={s.counterBox}>
              <Heart filled size={12} color="#868e96" />
              <Text style={[s.size12, s.count]}>{booth.counts.like}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={commonStyles.touchableArea}
          onPress={() => {
            push('Booth', { booth }, { bottomTabs: { visible: false } });
          }}>
          <Arrow direction="right" />
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={s.artworkList}
        showsHorizontalScrollIndicator={false}>
        {booth.artworks.map((artwork) => (
          <Image
            key={`artworkPreview-${artwork._id}`}
            source={{ uri: artwork.images[0].thumbUrl }}
            style={[
              s.artworkImage,
              { width: 96 / artwork.images[0].aspectRatio },
            ]}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default BoothPreview;
