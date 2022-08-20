

    document.addEventListener('DOMContentLoaded', () => {
            const userId = document.querySelector('#user_id')
            const userPw = document.querySelector('#user_pw')

            userId.onchange = checkId
            userPw.onchange = checkPw

            function checkId() {
                userId.value == 'tami'
            }
            function checkPw() {
                if (userPw.value == '1234') {
                    Swal.fire('로그인 성공')
                } else {
                    Swal.fire({
                    icon: 'error',
                    title: '로그인 실패',
                    text: '아이디 또는 비밀번호를 다시 입력해주세요.'
})
                    userPw.value = ''
                    userPw.focus()
                }
            }
        })
