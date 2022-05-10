import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Button, Col, Input, Menu, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';
import useInput from '../hooks/useInput';
import Router from 'next/router';
import { logoutRequestAction } from '../reducers/user';

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
  
`;

const Global = createGlobalStyle`
  .ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  
  .ant-col: first-child {
    padding-left: 0 !important;
  }

  .ant-col: last-child {
    padding-right: 0 !important;
  }
`;

const AppLayout = ({ children }) => {
  const [searchInput, onChangeSearchInput] = useInput('');
  const { me, logOutLoading } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
  });

  const onSearch = useCallback(() => {
    if (searchInput) {
      Router.push(`/hashtag/${searchInput}`);
    }
  }, [searchInput]);

  return (
    <div>
      <Global />
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>supercoder</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput
            enterButton
            value={searchInput}
            onChange={onChangeSearchInput}
            onSearch={onSearch}
          />
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>profile</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          {me ? (
            <Button onClick={onLogOut} loading={logOutLoading}>
              로그아웃
            </Button>
          ) : (
            <Link href="/login">로그인</Link>
          )}
        </Menu.Item>
      </Menu>

      <Row gutter={8}>
        <Col xs={24} md={0}>
          {me ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={48}>
          {children}
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = { children: PropTypes.node.isRequired };

export default AppLayout;
