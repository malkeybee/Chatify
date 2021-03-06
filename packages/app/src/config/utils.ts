import gravatar from 'gravatar'

export const gravatarURL = (accountName: string) =>
  gravatar.url(accountName, { s: '100', r: 'x', d: 'retro' }, true)

export const checkEmoji = (text: string) => {
  const emojiRegex = new RegExp(
    /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32-\ude3a]|[\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g,
  )

  return emojiRegex.test(text)
}

export const createUUID = (): string => {
  let date = new Date().getTime()

  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (date + Math.random() * 16) % 16 | 0
    date = Math.floor(date / 16)
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16)
  })

  return uuid
}

export const hasOnlyEmoji = (text: string) => {
  const regex = new RegExp(
    /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|[\ud83c[\ude50\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g,
  )

  return regex.test(text)
}

export const emojiStringToArray = (text: string) => {
  const split = text.split(/([\uD800-\uDBFF][\uDC00-\uDFFF])/)

  const arr: string[] = []

  split.forEach(char => {
    if (char !== '') {
      arr.push(char)
    }
  })

  return arr
}

export const topNavRoute = (topNextNav: any) => {
  const { index, routes } = topNextNav.routes[0]

  return routes[index].params
}

export const CALL_TYPES = {
  REJECT: 'REJECT',
  BUSY: 'BUSY',
  DIAL_SDP: 'DIAL_SDP',
  ANSWER_SDP: 'ANSWER_SDP',
  ICE_CANDIDATE: 'ICE_CANDIDATE',
  HANGUP: 'HANGUP',
  DISABLE_CAMERA: 'DISABLE_CAMERA',
  ENABLE_CAMERA: 'ENABLE_CAMERA',
  MUTE_MICROPHONE: 'MUTE_MICROPHONE',
}
