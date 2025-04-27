INSERT INTO "LearningPlatform" (platform_name, platform_url) VALUES
  ('Study Sapuri', 'https://studysapuri.jp/'),
  ('Try Online', 'https://www.try-online.jp/kobetsu/?utm_source=google&utm_medium=cpc&utm_campaign=sep_CPNID-C005_ADGID-G015_online&utm_content=sep_CPNID-C005_ADGID-G015_online&utm_term=%E3%83%8D%E3%83%83%E3%83%88%20%E6%8E%88%E6%A5%AD_e&gad_source=1&gbraid=0AAAAAoLgMyddV-JBZW8nE_qGKKGjII0rk&gclid=Cj0KCQjwiLLABhCEARIsAJYS6unTGBWaI-JwD7lMN8OFnIxcstfYeiPLwP-OU2p24p81Eu3Cn_DCmLMaAld7EALw_wcB');

INSERT INTO "User" (email, password_hash, email_verified, parent_consent, created_at) VALUES
  ('alice@example.com', '$2b$10$hashedpassword', TRUE, FALSE, NOW()),
  ('bob@example.com', '$2b$10$hashedpassword', TRUE, FALSE, NOW());

INSERT INTO "Community" (name, description, category, is_private, created_by_user_id, created_at) VALUES
  ('サポートグループ', '初期コミュニティです', 'other', FALSE, 1, NOW());

INSERT INTO "UserProfile" (user_id, nickname, interests, created_at, updated_at) VALUES
  (1, 'Alice', '心理学,読書', NOW(), NOW()),
  (2, 'Bob', '音楽,アート', NOW(), NOW());

INSERT INTO "LearningContent" (platform_id, title, description, content_url, grade_level, subject, difficulty_level, created_at) VALUES
  (1, '代数入門', '一次方程式の基礎', 'https://studysapuri.jp/', '中学生', '数学', 1, NOW()),
  (2, 'プログラミング基礎', 'JavaScript入門', 'https://www.coursera.org/javascript', '高校生', 'コンピュータサイエンス', 2, NOW());

INSERT INTO "LearningProgress" (user_id, content_id, completion_percentage, last_accessed, time_spent_minutes, notes, created_at, updated_at) VALUES
  (1, 1, 0.5, NOW(), 120, '練習中', NOW(), NOW()),
  (2, 2, 0.8, NOW(), 200, '理解度高い', NOW(), NOW());

INSERT INTO "CommunityMembership" (user_id, community_id, role, joined_at) VALUES
  (1, 1, 'admin', NOW()),
  (2, 1, 'member', NOW());

INSERT INTO "CommunityPost" (community_id, user_id, content, created_at, updated_at, is_anonymous) VALUES
  (1, 1, 'はじめまして、よろしくお願いします！', NOW(), NOW(), FALSE),
  (1, 2, '参加しました！', NOW(), NOW(), TRUE);

INSERT INTO "Resource" (name, type, description, website_url, location, contact_info, categories, created_at) VALUES
  ('子ども相談センター', 'counselor', '不登校の相談専門', 'https://consult.example.com', 'Tokyo', '03-1234-5678', '教育,健康', NOW());

INSERT INTO "ResourceBookmark" (user_id, resource_id, notes, created_at) VALUES
  (1, 1, 'すぐ連絡', NOW());

INSERT INTO "PositiveJournal" (user_id, content, is_favorite, entry_date, created_at) VALUES
  (1, '今日はいいことがあった', TRUE, '2023-01-02', NOW()),
  (2, '友達と話せた', FALSE, '2023-01-03', NOW());

INSERT INTO "Notification" (user_id, type, content, is_read, scheduled_at, created_at) VALUES
  (1, 'system', 'システムメンテナンスのお知らせ', FALSE, NOW() + INTERVAL '1 day', NOW()),
  (2, 'journal_reminder', 'ジャーナルを投稿しましょう', FALSE, NOW() + INTERVAL '2 days', NOW());
