import english from './english'
import chineseSimple from './chinese-simple'
import { Language } from './index'
import { LanguageEnum } from '../models/enum/LanguageEnum'

const getLanguage = (languageEnum: LanguageEnum): Language => {
  switch (languageEnum) {
    case LanguageEnum.ChineseSimple:
      return chineseSimple
    case LanguageEnum.English:
      return english
    default:
      return english
  }
}

export default getLanguage
