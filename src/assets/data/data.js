let users = {
  sarahedo: {
    id: 'sarahedo',
    name: 'Sarah Edo',
    avatarURL:"data:image/jpeg;base64,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" ,
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  tylermcginnis: {
    id: 'tylermcginnis',
    name: 'Tyler McGinnis',
    avatarURL:"data:image/jpeg;base64,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" ,
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  johndoe: {
    id: 'johndoe',
    name: 'John Doe',
    avatarURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAOEBAQEA8QDxAPEA8PEBUPDxUQEBcVFRUXGBUVFhYYHSggGBolGxUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGi0iHyUtKysrLS0tLS0tLS0vLS0tLS0tLS0tLS0tLS0rLS0tLS0tKystLS0tKy43LSsrLTcrN//AABEIAL4BCQMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAAAQIDBAUGBwj/xAA7EAACAQIEAwYDBgQGAwAAAAABAgADEQQSITEFQVETImFxgZEGMqEzQlKxwdEHI+HwFBVigpLxF0Ny/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAEDBAIF/8QAIBEBAAICAgIDAQAAAAAAAAAAAAECAxEhMQQSIjJBE//aAAwDAQACEQMRAD8A+yxQiMgEIRQCEIQCEIQCKEIBCKEBxQhAIQigOEUjVqhAWY2AFyToLQJxA3nhcV/ErDio9OnTqVQgtmUAA3vqtz3vadHg3xvhK7rSN6TEDLntlPqNjK/7V3ra3+N9b09VCK8ctVCOKEBwihAI4o4BCEJAccjGIEhCIRwCKEIBFCEAhCEAihCARQhAIQigEIRQHFCEAnk/4h8YSjhjQOr4lWpgdF+8T+k7vFuL0MGnaV6i0wdFB1Zj0UDUz4v8c/E6Y3EdpSUhUAVS1wTbW5A9dPCVZbcajtfhpu256UdmlBGYqczD7pBInDauxcOrHMpBvb8xzErxOLaqxa+p3sSAbecVG4O2e+lufp4zJFJhvnJE9PvfwHj6lbCURVFm7GlUXUm6MNN+QIIHhaekvOJ8OcPbD0cKjG7UsHSoueVwF5+hnWYzdTeuXmX1Np0tzQvM+eSDzpw0QlatJAyRKOK8IDhCEgAjijgMRxRwFCEIChCEAhCIwCIxxQCEIGAoQgYChCKATLxPHLh6VSq17U0ZiBubDQDxO01TyHxxUNQ4bD6kVq4LAG3cTU/XLOb29a7d46+1oh5o/DuJ4pVOJxNXLm0VVFwibhF8JL/xxQF/5ja2+hJ/WfQMLTVVAtYAASuuBymPU9tvt+Q+U8S/h44+ycHreebx/wAP4jDHvKSN7jUT7bXawnE4hh1qqVI3nPtMOtRLz38OPix6DJhK7XouQlMt8yMx7oH+knS3LSfWHM/O/GKL0K7KDa3yEeGx95944ViGq4eg7/O9GmzeZUEzVitMwy56RE7hqJizQkTLWddTqS9WmJTL0aSNIMkDKlMsBgSjkY4DjigIDjijgEIQgEUcRgEUcUBGEDCAQMIoBAwhAUUZiMBTyeLHa8SRSLilQdx6kD87+09YZwaOHJr1qxsCVakoGndDnU+P7SjPPEQvwRzMsfFcbVpgla9FSPuvTuo8ze8XB8bUrIxq9mSNQaROUj12mHjXwylW/dzFzclqjk3vfrbkJp4dwz/BYdlBudeZO/nM3LZqNMHF+OurBKNDtfxE1AgB5DWVUMZVYjtMP2YPNaoqW8xMNPhzPUdsz99SoyPlIvzBtoZPB8DrYd79s5XmtRu09b2395y60858b4UJUV/xj9Z9M+GHb/B4XN83YU7/APETw3xjgHxFXDoux+Y8lHOe94VVU0KRX5TTTLfQ2tNGDtm8mOIdINAmUh5INNLImDLFMpEmDA0o0uBmVGl6GShaDJCQBkhAlGJGOSJCOIQkBwhCARQhAIo4oBFHFAIGEICgYQgIxGMxGApz6lLK7tvmt6b6fUmdCUYpLgnmBK8tdwsxW1LzfFsdULLQpfaPz/CObGR4m9anRKqqvsF0IOg1zHW+s5nxPRxSu9XCsQVSm1RVC52QMcyoW0DWvYmWV8bRqUgWw/FKF7nu5axtbS5RmtuOkyRWbcvQm0RpycLiqlN1dlCg6OASRfqLztvVzes8dxTiYFkwhxFWoTrTxNBksvUuRYaec9NSUqtMN82RM3nacWiYWbiYQx6Mz0xTvmDox6ZBoQT67T0mGpBEVBsqhR6CYsDgbN2jMbkWC8h4+JnTQTVhxzHMsGfJ7arH4BLFkCZJZezrBJiQEkIFimXUzM4ltMwNIMkDKlMsBkoTEkJASQgSEcjHAlCEIBFCEAijigKEIQCEIQFCEDARigYrwAyLRkyJMDnPSGZhz29JxuKcPLaDMANgDOjxBzclTqDpODxLiVWmwv8Ae23E8+9oiZh6WL24ljTh4pEm2vMnUmbuH0hVqa7KL+3Kct8U77zq/D1QZ2U6FlsPO4nNNTeNussz6zLt2jiaF56LzDEksgDGDAtEmJWpkxAsEsSVLLUgXrJiVrJiShMSQkRGIEhHEI4E4RQgEIQgKEIQFCEIBAwigEiTGZix+KyDTeBoqVQu5AmWpxCmOftOPXrFiRe+tr3nJxFU/MPumzg/QyNpeqp8UpOLoc48B+8VXEMdtB9Z5XA1OzqA6hKpt4B/2M9Er9ZkvkvvUtdMdNbhVVE5XEWBKmwJXadWqJxsY+pEzWaKOZU3PnIZiDodR0k6qmCUieU5WS10uM1kGpFQD8Q19xLD8SKBdqbf7SD+cyHDm0qPDr+POX48l96iVF8ePUzMOtguN5lBqJkJvorZ7dBfnpadShiFfY+h3nAp4IrNdGmRzm6Hnu6plqznYOve6ncTcpki9ZasoQy9IQtWTEgsmJIkJISIkhAkI4hHAnFAwgEIQgKKMxQCKOKAQMIjAqr1Mov7Tj41u6Cddbn9ZsxVXMxUH5ZkrC4IgcjNbEOv/wAN9LSusoTEFT8tYaDle0rrgiuGOhKrfzGku42ndpVLag3nKTXDDY6i5Gs6CvcANoRpeQXWzcmAvLMnTWc3pFu3VLzXpbfkdROTisJnq6bETohuVreczmqFJNr25TPbBLVTPVW/DlvrsBaWLh0UWEjUxpbQU/Vm0lRzEasFHhvEePJPkQm9AHwlyUlUePLwkaVO2wOvMya66dD53MvpjivTNfJNu0RR3JFunlKaSggnxmzEEKp8vOZaRtRYjkrSxw52FxGYuwO7OB/tO87uBr9ogPPY+c83gFCgLf5QFJ66a+pM6PC6+V7bBtPXlA7ymX02mcSxTA1qZYJnptNCyUJxiREmIDEcQjgTMUcRgEIQhJGKOKEFCBhAJXVfKCTsATJyjGqzIQouTb2gcZGJLE7kypqxH9ZHtlV2pFlFVQGKFgHsdjbp4xOP7/aQM2KOaznT7v1H7yVYZ8MRa5U+99RFiqZNOoPC49P7Ev4cobDnTfUwlHhlTNSUdNJo1Hlz1mDhbWLL4850N4EH5635zLWvpv6aTVliyg+POBlFNjy08Wl6UbDe58Jcun/cAQBf2hCNVsq+MWGTmecqbvtrtNaC20CjiBshnMxOIyYRm52IPh6zdxN+75zg8UqA0FQ7GoLi99rn9IShg6hKg9bEeA5TZSOo9/aUUKdlGbp5CS4TxDD1sTUwyue1pKGZSpFxpfKTv8y+8geroPmUN1F5cJnpAAWGgl6yRchmlDMgl9JpKGgSQkFkxAlHEI5InFJGKQFEY4oSIo4oAYozFCCiMcUD5P8AE3Cq3+f0sRXplqDJai5AKZUpOcngwbMbf6hOqlRl1RmA0Nr93xFj7aT3PEKQem6nYqfynhmpd496y73666kCU34lbXmHRTElqhpkbq2vQDa82cE+yYbkFvoTOVggyvcAmmxsWItpy1nY4Mts635mdUttzeunPQZazDbXnOgGNjMWOXLW89JqXz0/KduUM1tf6xhrDl7RVm3W48LQQAjXaBJDpmbQDpIqjOc5FhyH5SxkJAHle8vYbC+loQppp4/WXrIIP7/pCneBzuMNqFnGxdLO9JQbBSX29B+s6fFPtfQWnJwlXtMRUI2Q9mPTf6kyrNb1rwuw0i1uWs0Opvb+9Js4Jw2lTapXVf5tcjOx3sosFHQaXlVWdDhfyDzMo8eZm/LR5Eapw6CS1ZUstWbGJYJbTMqWWpA0LLRKlliyUJiOIRyRbImMmImQFCF4rwAxRkxQCKO8RMBRSV4oFVUaHyM8riMHSsr207RWJuSLX1HlPWPsZ5R1Ip1UOmpK6/dJ/eUZu4X4epFStnpZuoNvfSaeFG7sRazBW9xOUrZKCgncE+5v+s0/DeIDKp8GTfmrED6WnGCflMO81fhEreLp30PK9pYag1HlytJcY25b9Zho1L7kkiaWZc7XI9jaW0h7Skay1CBvvA0J4SQlQqfXxhnG+kIWP0iRuY2EqU6+P0lrfLYa8zA4HEaoJdjy138PpOZ8KLdC53Ys3ub/AKyPxTj1pUKrZgC57JdRqW009L+02fC4HZL5TJ5E9Q2eNHEy31hOhwz5B5mYMSwvN/DG7nqZz432d+T9G9ZaspUy1Wm1hWrLElKmWqZI1LLFlKNLVMIWCSkQY7yR0LDpCw6RwgKw6QsOkcICyjpDKOkcICyjpDKOkcICyjpOfieK0kzgBnak9Gm4VCbGo6KOWvzg2E6MyVOG0mftGUs/d1LsbZXVxYXsozIh03tAqPFKOUsLmwBtkObXPpa296bC3UTN/neGClqimmAyJ/MpEXLUxUsNNe6fpNh4VRLBshuCT872uS51F7HWo+/WRHCKI2DixUgitVDAhcoIOa98ul+Y0gVNxHC9L99aY/ksQWZA4ANte6QdIqXE8OPulO/VT7E/+up2bMSBYLe2vjNOI4bSqK6OpK1Ddx2jjN3QutjqLAC20i3CaJNypvmZ/tHAuzBmFr2sWAJXa+toFNfilBcl1ur1DSB7M6sFY2W4798hGl5oq16KMFKgErnNqZIC9WIFlHn0kW4TQIsUJAYuAXchWIIugv3D3jtaTbh9MkEhiQGH2j6hiSVbXvC5OhuBAyvxbDBcxuAMxP8AIe4CqGJIy3Ayspv4zTTxFFkepoq08wfOmQrl1NwRcaayK8IoBWXISGV0a9R2JV1VWFyb/KqjwtpNSUFXPYfaMWe+tyQAd/ACBgxHEaK0adZAlVKxQUitsrZhcG4G1gTJUsWrNlWkhvQFdCGBVr8rgdSNZqr4Om6hCtlUgrkJQqRsVKkEekpXhVFSCodctLsRlrVFUJa1goawPjv4wMicSBWm4oKc9bsCM1mDZ8pIBXUAAtrY2B0kDxhApJpKpz5MrMFy6MQal17oOQgb3JAnRo8PpJlyqbozOpZ2c5mFmYliSTYkXPWQPC6Xf+0vUy5z29XMQL2GbNcL3m7oNtTAxpjKdVqarh0YVqPb0SwAuLKe9de783K+0pp8YpDss1BU7VlUarY5qvZKU079zY+AIM6g4dSDZrNcLkUdo+VRbL3FvZNBuAIzw+kRTGU5aOXs1DsEGW2W6g2a1ha4NrQLjQT8C/8AERiio+6vsJOEaEOzX8I9hH2a/hHtJQgR7MdB7QyDoPaShAjkHQe0eUdB7RwgLKOghlHSOED/2Q==",
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  }
}

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'sarahedo',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['sarahedo'],
      text: 'have horrible short term memory',
    },
    optionTwo: {
      votes: [],
      text: 'have horrible long term memory'
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'johndoe',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'become a superhero',
    },
    optionTwo: {
      votes: ['johndoe', 'sarahedo'],
      text: 'become a supervillain'
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'sarahedo',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'be telekinetic',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be telepathic'
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'tylermcginnis',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'be a front-end developer',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be a back-end developer'
    }
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'tylermcginnis',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['tylermcginnis'],
      text: 'find $50 yourself',
    },
    optionTwo: {
      votes: ['johndoe'],
      text: 'have your best friend find $500'
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'johndoe',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['johndoe'],
      text: 'write JavaScript',
    },
    optionTwo: {
      votes: ['tylermcginnis'],
      text: 'write Swift'
    }
  },
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
// get user
export function _getUsers () {
  return (users) 

}
//get question
export function _getQuestions () {
  return questions
}

function formatQuestion ({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    }
  }
}

export function _saveQuestion (question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      }
      
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id])
        }
      }

      res(formattedQuestion)
    }, 1000)
  })
}

export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
      }

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      }

      res()
    }, 500)
  })
}
