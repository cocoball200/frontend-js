# 중점으로 봐야할 부분

stopPropagation을 통해 버블링을 해결해주어야 한다!

이벤트 핸들러를 최소화해야 한다.

# addEventListener를 상위에 넣은 이유

addEventListener를 통해 이벤트 감시 대상이 많으면, 메모리에 부담이 된다.
만약 아이템이 추가 된다면, 변경된 목록도 모달을 띄울 수 있도록 할 수 있다.

# stopPropagation과 preventDefault의 차이?!

1. preventDefault

preventDefault는 인스타그램 클론을 했을 당시 form을 submit하면 넘어가게 되서, db도 없고, 넘어가면 안되었기 때문에 e.prventDefault()를 주어서, 동작을 중단시켜주었다.
고유 동작을 중단시켜 준다!

2. stopPropagation과

예전에 같은 부모에 있는 tag 두개가 각각 다른 기능을 가진 버튼이었다. 그런데, 두개를 모두 눌렀을때, 동일한 기능이 실행된적이 있는데. 이를 stopPropagation을 통해 해결하였다. 즉 상위 엘레멘트들로 전파를 중단시켜 준다.
