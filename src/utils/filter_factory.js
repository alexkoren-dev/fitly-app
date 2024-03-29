import AES from "crypto-js/aes"
import Utf8 from "crypto-js/enc-utf8"

const passphrase = "random_string"

export const compareString = (filter, value, option) => {
  if (filter === "") {
    return true
  } else {
    if (option === "contain") {
      if (value.indexOf(filter) > -1) {
        return true
      } else {
        return false
      }
    } else if (option === "match") {
      if (value === filter) {
        return true
      } else {
        return false
      }
    } else {
      return true
    }
  }
}

export const filterDataList = (filter, real_key, option, data) => {
  let temp_list = []
  data.map((item) => {
    if (compareString(filter, item[real_key], option)) {
      let temp = Object.assign({}, item)
      temp_list.push(temp)
    }
  })
  return temp_list
}

export const filterErrorMsg = (errors) => {
  let error_msg = ""
  Object.keys(errors).map((error) => {
    error_msg += `${error.toLocaleUpperCase()} ${errors[error]} \n`
  })

  return error_msg
}

export const encryptWithAES = (text) => {
  return AES.encrypt(text, passphrase).toString()
}

export const decryptWithAES = (ciphertext) => {
  const bytes = AES.decrypt(ciphertext, passphrase)
  const originalText = bytes.toString(Utf8)
  return originalText
}
