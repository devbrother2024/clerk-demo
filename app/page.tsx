'use client'
import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
    useUser
} from '@clerk/nextjs'

export default function Home() {
    const { user } = useUser()

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8">
            {/* 헤더 영역 - 로그인/로그아웃 버튼 */}
            <header className="absolute top-4 right-4">
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <SignInButton mode="modal">
                        <button className="rounded-full bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition-colors">
                            로그인
                        </button>
                    </SignInButton>
                </SignedOut>
            </header>

            {/* 메인 콘텐츠 */}
            <main className="text-center">
                <SignedIn>
                    <h1 className="text-3xl font-bold mb-4">
                        환영합니다,{' '}
                        {user?.firstName || user?.username || '사용자'}님!
                    </h1>
                    <p className="text-gray-600">로그인에 성공하셨습니다.</p>
                </SignedIn>

                <SignedOut>
                    <h1 className="text-3xl font-bold mb-4">환영합니다!</h1>
                    <p className="text-gray-600 mb-8">
                        서비스를 이용하시려면 로그인을 진행해 주세요.
                    </p>
                    <SignInButton mode="modal">
                        <button className="rounded-full bg-blue-500 text-white px-6 py-3 text-lg hover:bg-blue-600 transition-colors">
                            로그인 하기
                        </button>
                    </SignInButton>
                </SignedOut>
            </main>
        </div>
    )
}
