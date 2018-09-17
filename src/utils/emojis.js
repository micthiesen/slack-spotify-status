const spotify = require('./spotify')
// Map of lowercase strings to emojis. Ordered in decending preference
// https://www.webpagefx.com/tools/emoji-cheat-sheet/
const EMOJI_MAP = new Map([
  ['alien', ':alien:'],
  ['ufo', ':alien:'],
  ['heartbreak', ':heartbreak:'],
  ['heart break', ':heartbreak:'],
  ['broken heart', ':heartbreak:'],
  ['space', ':alien:'],
  ['innocent', ':innocent:'],
  ['evil', ':smiling_imp:'],
  ['yum', ':yum:'],
  ['yummy', ':yum:'],
  ['delicious', ':yum:'],
  ['cupid', ':cupid:'],
  ['sweat', ':sweat:'],
  ['sweaty', ':sweat:'],
  ['workout', ':muscle:'],
  ['work out', ':muscle:'],
  ['star', ':star:'],
  ['cat', ':cat:'],
  ['kitty', ':cat:'],
  ['pig', ':pig:'],
  ['monkey', ':monkey:'],
  ['sheep', ':sheep:'],
  ['boom', ':boom:'],
  ['explosion', ':boom:'],
  ['crash', ':boom:'],
  ['fart', ':dash:'],
  ['poop', ':poop:'],
  ['shit', ':poop:'],
  ['muscle', ':muscle:'],
  ['run', ':runner:'],
  ['running', ':runner:'],
  ['runner', ':runner:'],
  ['clap', ':clap:'],
  ['kiss', ':kiss:'],
  ['lips', ':lips:'],
  ['sleeping', ':sleeping:'],
  ['sleep', ':sleeping:'],
  ['sea', ':ocean:'],
  ['ocean', ':ocean:'],
  ['wave', ':ocean:'],
  ['waves', ':ocean:'],
  ['water', ':ocean:'],
  ['waters', ':ocean:'],
  ['tired', ':sleeping:'],
  ['looking', ':eyes:'],
  ['money', ':money_with_wings:'],
  ['millionaire', ':money_with_wings:'],
  ['billionaire', ':money_with_wings:'],
  ['rage', ':rage1:'],
  ['angry', ':angry:'],
  ['anger', ':angry:'],
  ['mad', ':angry:'],
  ['hate', ':angry:'],
  ['sunny', ':sunny:'],
  ['sun', ':sunny:'],
  ['snow', ':snowflake:'],
  ['snowflake', ':snowflake:'],
  ['snowy', ':snowflake:'],
  ['rain', ':droplet:'],
  ['rainy', ':droplet:'],
  ['raining', ':droplet:'],
  ['cloud', ':cloud:'],
  ['cloudy', ':cloud:'],
  ['moon', ':full_moon:'],
  ['cool', ':sunglasses:'],
  ['wind', ':dash:'],
  ['fast', ':dash:'],
  ['eyes', ':eyes:'],
  ['eye', ':eyes:'],
  ['hello', ':wave:'],
  ['love', ':heart:'],
  ['heart', ':heart:'],
  ['ghost', ':ghost:'],
  ['scary', ':ghost:'],
  ['halloween', ':ghost:'],
  ['fire', ':fire:'],
  ['hot', ':fire:'],
  ['heat', ':fire:'],
  ['burn', ':fire:'],
  ['prison', ':gun:'],
  ['Lucky', ':raised_hands:'],
  ['electric', ':zap:'],
  ['thunder', ':thunder_cloud_and_rain:'],
  ['storm', ':thunder_cloud_and_rain:'],
  ['money', ':money_mouth_face:'],
  ['dollar', ':money_mouth_face:'],  
  ['night', ':sparkles:'],
  ['forest', ':evergreen_tree:'],
  ['tree', ':evergreen_tree:'],
  ['hug', ':hugging_face:'],
  ['hugging', ':hugging_face:']
])

const DEFAULT_EMOJIS = [
  ':headphones:',
  ':notes:',
  ':musical_note:'
]

const getDefault = function (spotifyItem) {
  var string = spotifyItem.name + spotifyItem.artists[0].name
  return DEFAULT_EMOJIS[string.length % DEFAULT_EMOJIS.length]
}

module.exports.getStatusEmoji = function (spotifyItem) {
  const stringsToCheck = [spotifyItem.name, spotify.getArtistString(spotifyItem)]

  for (const string of stringsToCheck) {
    for (const [alias, emoji] of EMOJI_MAP) {
      var regexp = new RegExp('(^| )' + alias + '( |$)', 'i')
      if (regexp.test(string)) { return emoji }
    }
  }

  return getDefault(spotifyItem)
}
