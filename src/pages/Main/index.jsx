import React from "react";
import {
  Container,
  Sidebar,
  Logo,
  AddFeatureButton,
  Menu,
  MenuItem,
  BottomMenu,
  Settings,
  Categories,
  SearchBar,
  Content,
  ArticleContent,
  ArticleTitle,
  Date,
  RightSidebar,
  SectionContent,
  SectionTitle,
  Section,
  UserInfo,
} from "@pages/Main/styles";

const Main = () => {
  return (
    <Container>
      <Sidebar>
        <Logo>
          {/* 임시 이미지 */}
          <img src="https://via.placeholder.com/30" alt="Logo" />
          <span>Note Widget</span>
        </Logo>
        <AddFeatureButton>
          {/* 임시 아이콘 */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 4V12"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M4 8H12"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          Add New Feature
        </AddFeatureButton>
        <Menu>
          <MenuItem className="active">
            {/* 임시 아이콘 */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 4H12V12H4V4Z"
                stroke="#3498DB"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Task</span>
            <span className="count">12</span>
          </MenuItem>
          <MenuItem>
            {/* 임시 아이콘 */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 4H12V12H4V4Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Notes</span>
            <span className="count">5</span>
          </MenuItem>
          <MenuItem>
            {/* 임시 아이콘 */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 4V8H12"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M8 12V12"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span>Reminder</span>
          </MenuItem>
          <MenuItem>
            {/* 임시 아이콘 */}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 4H12V12H4V4Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Events</span>
            <span className="count">21</span>
          </MenuItem>
        </Menu>
        <BottomMenu>
          <Settings>Settings</Settings>
          <Categories>Categories</Categories>
        </BottomMenu>
      </Sidebar>
      <Content>
        <SearchBar>
          <input type="text" placeholder="Search" />
        </SearchBar>
        <UserInfo>
          <div className="notifications"></div>
          <div className="user-name">Peter Parker</div>
        </UserInfo>
        <Section className="personal">
          <SectionTitle>
            <span></span>
            <span>Personal</span>
            <span>10 min ago</span>
          </SectionTitle>
          <SectionContent>
            <p>Pending Comments</p>
            <p>
              This is reminder to cancel the comment on the board for student by
              tomorrow
            </p>
          </SectionContent>
        </Section>
        <Section className="academic-writing">
          <SectionTitle>
            <span></span>
            <span>Academic</span>
            <span>30 min ago</span>
          </SectionTitle>
          <SectionContent>
            <p>My technical writing student</p>
            <p>As an adult student, and mother of three college...</p>
          </SectionContent>
        </Section>
        <Section className="travel">
          <SectionTitle>
            <span></span>
            <span>Travel</span>
            <span>45 min ago</span>
          </SectionTitle>
          <SectionContent>
            <p>Location reservation</p>
            <p>
              The location for the sea side house has to be completed by Marc
            </p>
          </SectionContent>
        </Section>
        <Section className="student-session">
          <SectionTitle>
            <span></span>
            <span>Academic</span>
            <span>1 day ago</span>
          </SectionTitle>
          <SectionContent>
            <p>Student session</p>
            <p>
              T மண்டy session has to be cancelled due to the numerous vacations
            </p>
          </SectionContent>
        </Section>
        <Section className="events">
          <SectionTitle>
            <span></span>
            <span>Events</span>
            <span>2 days ago</span>
          </SectionTitle>
          <SectionContent>
            <p>Margo Birthday</p>
            <p>Remind to by her a present at the location shop</p>
          </SectionContent>
        </Section>
      </Content>
      <RightSidebar>
        <Date>27 / 03 / 2018</Date>
        <ArticleTitle>My technical writing for students</ArticleTitle>
        <ArticleContent>
          <p>
            As an adult student, and mother of three college-aged children,
            experience has taught me the importance of good study skills and
            habits. Not only can a student “survive” college with these skills,
            they can actually do quite well. I took the opportunity to write
            this paper with my children in mind. Learning how to take lecture
            notes effectively is the first step college students need to make
            the transition from high school to college easier.
          </p>
          <p>
            Few people realize how fast memory fades. Studies on memory have
            shown that, without review, 47% of what a person has just learned is
            forgotten in the first twenty minutes and 62% is forgotten after the
            first day. Therefore, having good lecture notes to review can
            determine well you are able to perform on exams.
          </p>
          <div className="add-comment">Add Comment</div>
        </ArticleContent>
      </RightSidebar>
    </Container>
  );
};

export default Main;
