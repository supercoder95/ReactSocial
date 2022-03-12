import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
  const followingList = [
    { nickname: 'supercoder' },
    { nickname: 'hypercoder' },
    { nickname: 'ultracoder' },
  ];
  const followerList = [
    { nickname: 'pack0min' },
    { nickname: 'twoSun' },
    { nickname: '0woo' },
  ];

  return (
    <>
      <Head>
        <title>내 프로필</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉목록" data={followingList} />
        <FollowList header="팔로워목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
