export const questions = [
  {
    describe:
      'Sự tác động của con người vào tự nhiên, biến đổi các yếu tố của tự nhiên để tạo ra các sản phẩm phù hợp với nhu cầu của con người là nội dung của khái niệm',
    answers: ['Phát triển kinh tế.', 'Sản xuất của cải vật chất.'],
    checked: false,
  },
];
export const USERS = [
  {
    id: 'admin1',
    username: 'admin123',
    password: '123456',
    power: 'admin',
    points: 1000,
  },
  { id: 'user1', username: 'user123', password: '123456', power: 'user', points: 18000 },
];

export const EXAMLIST = [
  {
    id: 'exam1',
    difficulty: 'normal',
    describe: 'Kiểm tra bảo mật thông tin',
    time: 7,
    totalPoints: 250,
    pointsOfMe: 0,
    rating: 4,
    questions: [
      {
        id: 'exam1question1',
        title:
          'Pháp luật là quy tắc xử sự chung, được áp dụng đối với tất cả mọi người là thể hiện đặc trưng nào dưới đây của pháp luật?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Tính quy phạm phổ biến.' },
          { id: '2', description: 'Tính phổ cập' },
          { id: '3', description: 'Tính rộng rãi.' },
          { id: '4', description: 'Tính nhân văn.' },
        ],
      },
      {
        id: 'exam1question2',
        title: 'Pháp luật do Nhà nước ban hành và đảm bảo thực hiện',
        answerId: '1',
        answers: [
          { id: '1', description: 'Bằng quyền lực Nhà nước.' },
          { id: '2', description: 'Bằng chủ trương của Nhà nước.' },
          { id: '3', description: 'Bằng chính sách của Nhà nước.' },
          { id: '4', description: 'Bằng uy tín của Nhà nước.' },
        ],
      },
      {
        id: 'exam1question3',
        title: 'Pháp luật không quy định về những việc nào dưới đây ?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Nên làm' },
          { id: '2', description: 'Được làm.' },
          { id: '3', description: 'Phải làm' },
          { id: '4', description: 'Không được làm.' },
        ],
      },
      {
        id: 'exam1question4',
        title: 'Một trong những đặc trưng của pháp luật thể hiện ở',
        answerId: '1',
        answers: [
          { id: '1', description: 'tính quyền lực, bắt buộc chung.' },
          { id: '2', description: 'tính hiện đại.' },
          { id: '3', description: 'tính cơ bản.' },
          { id: '4', description: 'tính truyền thống.' },
        ],
      },
      {
        id: 'exam1question5',
        title: 'Một trong những đặc trưng của pháp luật thể hiện ở',
        answerId: '1',
        answers: [
          { id: '1', description: 'tính quyền lực, bắt buộc chung.' },
          { id: '2', description: 'tính hiện đại.' },
          { id: '3', description: 'tính cơ bản.' },
          { id: '4', description: 'tính truyền thống.' },
        ],
      },
      {
        id: 'exam1question6',
        title:
          'Để quản lí xã hội, Nhà nước cần sử dụng phương tiện quan trọng nhất nào dưới đây?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Pháp luật' },
          { id: '2', description: 'Giáo dục.' },
          { id: '3', description: 'Thuyết phục ' },
          { id: '4', description: 'Tuyên truyền.' },
        ],
      },
      {
        id: 'exam1question7',
        title:
          'Pháp luật quy định về những việc được làm, việc phải làm và những việc nào dưới đây?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Không được làm ' },
          { id: '2', description: 'Không nên làm.' },
          { id: '3', description: 'Cần làm ' },
          { id: '4', description: 'Sẽ làm.' },
        ],
      },
      {
        id: 'exam1question8',
        title: 'Pháp luật có tính quy phạm phổ biến, vì pháp luật được áp dụng',
        answerId: '1',
        answers: [
          { id: '1', description: 'trong mọi lĩnh vực của đời sống xã hội.' },
          { id: '2', description: 'trong một số lĩnh vực quan trọng.' },
          { id: '3', description: 'đối với người vi phạm' },
          { id: '4', description: 'đối với người sản xuất kinh doanh.' },
        ],
      },
      {
        id: 'exam1question9',
        title:
          'Nội dung của tất cả các văn bản pháp luật đều phải phù hợp, không được trái với Hiến pháp là thể hiện đặc trưng nào dưới đây của pháp luật?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Tính xác định chặt chẽ về mặt hình thức.' },
          { id: '2', description: 'Tính quy phạm phổ biến.' },
          { id: '3', description: 'Tính phù hợp về mặt nôi dung.' },
          { id: '4', description: 'Tính bắt buộc chung.' },
        ],
      },
      {
        id: 'exam1question10',
        title:
          'Các quy phạm pháp luật do Nhà nước ban hành phù hợp với lợi ích của giai cấp cầm quyền là thể hiện bản chất nào dưới đây của phâp luật?',
        answerId: '2',
        answers: [
          { id: '1', description: ' Bản chất xã hội.' },
          { id: '2', description: 'Bản chất giai cấp.' },
          { id: '3', description: 'Bản chất nhân dân.' },
          { id: '4', description: 'Bản chất dân tộc.' },
        ],
      },
    ],
  },

  {
    id: 'exam2',
    difficulty: 'easy',
    describe: 'Giáo dục công dân',
    time: 8,
    totalPoints: 250,
    pointsOfMe: 0,
    rating: 4,
    questions: [
      {
        id: 'exam2question1',
        title:
          'Pháp luật là quy tắc xử sự chung, được áp dụng đối với tất cả mọi người là thể hiện đặc trưng nào dưới đây của pháp luật?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Tính quy phạm phổ biến.' },
          { id: '2', description: 'Tính phổ cập' },
          { id: '3', description: 'Tính rộng rãi.' },
          { id: '4', description: 'Tính nhân văn.' },
        ],
      },
      {
        id: 'exam2question2',
        title: 'Pháp luật do Nhà nước ban hành và đảm bảo thực hiện',
        answerId: '1',
        answers: [
          { id: '1', description: 'Bằng quyền lực Nhà nước.' },
          { id: '2', description: 'Bằng chủ trương của Nhà nước.' },
          { id: '3', description: 'Bằng chính sách của Nhà nước.' },
          { id: '4', description: 'Bằng uy tín của Nhà nước.' },
        ],
      },
      {
        id: 'exam2question3',
        title: 'Pháp luật không quy định về những việc nào dưới đây ?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Nên làm' },
          { id: '2', description: 'Được làm.' },
          { id: '3', description: 'Phải làm' },
          { id: '4', description: 'Không được làm.' },
        ],
      },
      {
        id: 'exam2question4',
        title: 'Một trong những đặc trưng của pháp luật thể hiện ở',
        answerId: '1',
        answers: [
          { id: '1', description: 'tính quyền lực, bắt buộc chung.' },
          { id: '2', description: 'tính hiện đại.' },
          { id: '3', description: 'tính cơ bản.' },
          { id: '4', description: 'tính truyền thống.' },
        ],
      },
      {
        id: 'exam2question5',
        title: 'Một trong những đặc trưng của pháp luật thể hiện ở',
        answerId: '1',
        answers: [
          { id: '1', description: 'tính quyền lực, bắt buộc chung.' },
          { id: '2', description: 'tính hiện đại.' },
          { id: '3', description: 'tính cơ bản.' },
          { id: '4', description: 'tính truyền thống.' },
        ],
      },
      {
        id: 'exam2question6',
        title:
          'Để quản lí xã hội, Nhà nước cần sử dụng phương tiện quan trọng nhất nào dưới đây?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Pháp luật' },
          { id: '2', description: 'Giáo dục.' },
          { id: '3', description: 'Thuyết phục ' },
          { id: '4', description: 'Tuyên truyền.' },
        ],
      },
      {
        id: 'exam2question7',
        title:
          'Pháp luật quy định về những việc được làm, việc phải làm và những việc nào dưới đây?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Không được làm ' },
          { id: '2', description: 'Không nên làm.' },
          { id: '3', description: 'Cần làm ' },
          { id: '4', description: 'Sẽ làm.' },
        ],
      },
      {
        id: 'exam2question8',
        title: 'Pháp luật có tính quy phạm phổ biến, vì pháp luật được áp dụng',
        answerId: '1',
        answers: [
          { id: '1', description: 'trong mọi lĩnh vực của đời sống xã hội.' },
          { id: '2', description: 'trong một số lĩnh vực quan trọng.' },
          { id: '3', description: 'đối với người vi phạm' },
          { id: '4', description: 'đối với người sản xuất kinh doanh.' },
        ],
      },
      {
        id: 'exam2question9',
        title:
          'Nội dung của tất cả các văn bản pháp luật đều phải phù hợp, không được trái với Hiến pháp là thể hiện đặc trưng nào dưới đây của pháp luật?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Tính xác định chặt chẽ về mặt hình thức.' },
          { id: '2', description: 'Tính quy phạm phổ biến.' },
          { id: '3', description: 'Tính phù hợp về mặt nôi dung.' },
          { id: '4', description: 'Tính bắt buộc chung.' },
        ],
      },
      {
        id: 'exam2question10',
        title:
          'Các quy phạm pháp luật do Nhà nước ban hành phù hợp với lợi ích của giai cấp cầm quyền là thể hiện bản chất nào dưới đây của phâp luật?',
        answerId: '2',
        answers: [
          { id: '1', description: ' Bản chất xã hội.' },
          { id: '2', description: 'Bản chất giai cấp.' },
          { id: '3', description: 'Bản chất nhân dân.' },
          { id: '4', description: 'Bản chất dân tộc.' },
        ],
      },
    ],
  },

  {
    id: 'exam3',
    difficulty: 'difficult',
    describe: 'Hello world',
    time: 7,
    totalPoints: 250,
    pointsOfMe: 0,
    rating: 4,
    questions: [
      {
        id: 'exam3question1',
        title:
          'Pháp luật là quy tắc xử sự chung, được áp dụng đối với tất cả mọi người là thể hiện đặc trưng nào dưới đây của pháp luật?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Tính quy phạm phổ biến.' },
          { id: '2', description: 'Tính phổ cập' },
          { id: '3', description: 'Tính rộng rãi.' },
          { id: '4', description: 'Tính nhân văn.' },
        ],
      },
      {
        id: 'exam3question2',
        title: 'Pháp luật do Nhà nước ban hành và đảm bảo thực hiện',
        answerId: '1',
        answers: [
          { id: '1', description: 'Bằng quyền lực Nhà nước.' },
          { id: '2', description: 'Bằng chủ trương của Nhà nước.' },
          { id: '3', description: 'Bằng chính sách của Nhà nước.' },
          { id: '4', description: 'Bằng uy tín của Nhà nước.' },
        ],
      },
      {
        id: 'exam3question3',
        title: 'Pháp luật không quy định về những việc nào dưới đây ?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Nên làm' },
          { id: '2', description: 'Được làm.' },
          { id: '3', description: 'Phải làm' },
          { id: '4', description: 'Không được làm.' },
        ],
      },
      {
        id: 'exam3question4',
        title: 'Một trong những đặc trưng của pháp luật thể hiện ở',
        answerId: '1',
        answers: [
          { id: '1', description: 'tính quyền lực, bắt buộc chung.' },
          { id: '2', description: 'tính hiện đại.' },
          { id: '3', description: 'tính cơ bản.' },
          { id: '4', description: 'tính truyền thống.' },
        ],
      },
      {
        id: 'exam3question5',
        title: 'Một trong những đặc trưng của pháp luật thể hiện ở',
        answerId: '1',
        answers: [
          { id: '1', description: 'tính quyền lực, bắt buộc chung.' },
          { id: '2', description: 'tính hiện đại.' },
          { id: '3', description: 'tính cơ bản.' },
          { id: '4', description: 'tính truyền thống.' },
        ],
      },
      {
        id: 'exam3question6',
        title:
          'Để quản lí xã hội, Nhà nước cần sử dụng phương tiện quan trọng nhất nào dưới đây?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Pháp luật' },
          { id: '2', description: 'Giáo dục.' },
          { id: '3', description: 'Thuyết phục ' },
          { id: '4', description: 'Tuyên truyền.' },
        ],
      },
      {
        id: 'exam3question7',
        title:
          'Pháp luật quy định về những việc được làm, việc phải làm và những việc nào dưới đây?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Không được làm ' },
          { id: '2', description: 'Không nên làm.' },
          { id: '3', description: 'Cần làm ' },
          { id: '4', description: 'Sẽ làm.' },
        ],
      },
      {
        id: 'exam3question8',
        title: 'Pháp luật có tính quy phạm phổ biến, vì pháp luật được áp dụng',
        answerId: '1',
        answers: [
          { id: '1', description: 'trong mọi lĩnh vực của đời sống xã hội.' },
          { id: '2', description: 'trong một số lĩnh vực quan trọng.' },
          { id: '3', description: 'đối với người vi phạm' },
          { id: '4', description: 'đối với người sản xuất kinh doanh.' },
        ],
      },
      {
        id: 'exam3question9',
        title:
          'Nội dung của tất cả các văn bản pháp luật đều phải phù hợp, không được trái với Hiến pháp là thể hiện đặc trưng nào dưới đây của pháp luật?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Tính xác định chặt chẽ về mặt hình thức.' },
          { id: '2', description: 'Tính quy phạm phổ biến.' },
          { id: '3', description: 'Tính phù hợp về mặt nôi dung.' },
          { id: '4', description: 'Tính bắt buộc chung.' },
        ],
      },
      {
        id: 'exam3question10',
        title:
          'Các quy phạm pháp luật do Nhà nước ban hành phù hợp với lợi ích của giai cấp cầm quyền là thể hiện bản chất nào dưới đây của phâp luật?',
        answerId: '2',
        answers: [
          { id: '1', description: ' Bản chất xã hội.' },
          { id: '2', description: 'Bản chất giai cấp.' },
          { id: '3', description: 'Bản chất nhân dân.' },
          { id: '4', description: 'Bản chất dân tộc.' },
        ],
      },
    ],
  },

  {
    id: 'exam4',
    difficulty: 'easy',
    describe: 'Giáo dục công dân 666',
    time: 8,
    totalPoints: 250,
    pointsOfMe: 0,
    rating: 4,
    questions: [
      {
        id: 'exam4question1',
        title:
          'Pháp luật là quy tắc xử sự chung, được áp dụng đối với tất cả mọi người là thể hiện đặc trưng nào dưới đây của pháp luật?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Tính quy phạm phổ biến.' },
          { id: '2', description: 'Tính phổ cập' },
          { id: '3', description: 'Tính rộng rãi.' },
          { id: '4', description: 'Tính nhân văn.' },
        ],
      },
      {
        id: 'exam4question2',
        title: 'Pháp luật do Nhà nước ban hành và đảm bảo thực hiện',
        answerId: '1',
        answers: [
          { id: '1', description: 'Bằng quyền lực Nhà nước.' },
          { id: '2', description: 'Bằng chủ trương của Nhà nước.' },
          { id: '3', description: 'Bằng chính sách của Nhà nước.' },
          { id: '4', description: 'Bằng uy tín của Nhà nước.' },
        ],
      },
      {
        id: 'exam4question3',
        title: 'Pháp luật không quy định về những việc nào dưới đây ?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Nên làm' },
          { id: '2', description: 'Được làm.' },
          { id: '3', description: 'Phải làm' },
          { id: '4', description: 'Không được làm.' },
        ],
      },
      {
        id: 'exam4question4',
        title: 'Một trong những đặc trưng của pháp luật thể hiện ở',
        answerId: '1',
        answers: [
          { id: '1', description: 'tính quyền lực, bắt buộc chung.' },
          { id: '2', description: 'tính hiện đại.' },
          { id: '3', description: 'tính cơ bản.' },
          { id: '4', description: 'tính truyền thống.' },
        ],
      },
      {
        id: 'exam4question5',
        title: 'Một trong những đặc trưng của pháp luật thể hiện ở',
        answerId: '1',
        answers: [
          { id: '1', description: 'tính quyền lực, bắt buộc chung.' },
          { id: '2', description: 'tính hiện đại.' },
          { id: '3', description: 'tính cơ bản.' },
          { id: '4', description: 'tính truyền thống.' },
        ],
      },
      {
        id: 'exam4question6',
        title:
          'Để quản lí xã hội, Nhà nước cần sử dụng phương tiện quan trọng nhất nào dưới đây?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Pháp luật' },
          { id: '2', description: 'Giáo dục.' },
          { id: '3', description: 'Thuyết phục ' },
          { id: '4', description: 'Tuyên truyền.' },
        ],
      },
      {
        id: 'exam4question7',
        title:
          'Pháp luật quy định về những việc được làm, việc phải làm và những việc nào dưới đây?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Không được làm ' },
          { id: '2', description: 'Không nên làm.' },
          { id: '3', description: 'Cần làm ' },
          { id: '4', description: 'Sẽ làm.' },
        ],
      },
      {
        id: 'exam4question8',
        title: 'Pháp luật có tính quy phạm phổ biến, vì pháp luật được áp dụng',
        answerId: '1',
        answers: [
          { id: '1', description: 'trong mọi lĩnh vực của đời sống xã hội.' },
          { id: '2', description: 'trong một số lĩnh vực quan trọng.' },
          { id: '3', description: 'đối với người vi phạm' },
          { id: '4', description: 'đối với người sản xuất kinh doanh.' },
        ],
      },
      {
        id: 'exam4question9',
        title:
          'Nội dung của tất cả các văn bản pháp luật đều phải phù hợp, không được trái với Hiến pháp là thể hiện đặc trưng nào dưới đây của pháp luật?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Tính xác định chặt chẽ về mặt hình thức.' },
          { id: '2', description: 'Tính quy phạm phổ biến.' },
          { id: '3', description: 'Tính phù hợp về mặt nôi dung.' },
          { id: '4', description: 'Tính bắt buộc chung.' },
        ],
      },
      {
        id: 'exam4question10',
        title:
          'Các quy phạm pháp luật do Nhà nước ban hành phù hợp với lợi ích của giai cấp cầm quyền là thể hiện bản chất nào dưới đây của phâp luật?',
        answerId: '2',
        answers: [
          { id: '1', description: ' Bản chất xã hội.' },
          { id: '2', description: 'Bản chất giai cấp.' },
          { id: '3', description: 'Bản chất nhân dân.' },
          { id: '4', description: 'Bản chất dân tộc.' },
        ],
      },
    ],
  },

  {
    id: 'exam5',
    difficulty: 'difficult',
    describe: 'Kiểm tra bảo mật thông tin',
    time: 7,
    totalPoints: 250,
    pointsOfMe: 0,
    rating: 4,
    questions: [
      {
        id: 'exam5question1',
        title:
          'Pháp luật là quy tắc xử sự chung, được áp dụng đối với tất cả mọi người là thể hiện đặc trưng nào dưới đây của pháp luật?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Tính quy phạm phổ biến.' },
          { id: '2', description: 'Tính phổ cập' },
          { id: '3', description: 'Tính rộng rãi.' },
          { id: '4', description: 'Tính nhân văn.' },
        ],
      },
      {
        id: 'exam5question2',
        title: 'Pháp luật do Nhà nước ban hành và đảm bảo thực hiện',
        answerId: '1',
        answers: [
          { id: '1', description: 'Bằng quyền lực Nhà nước.' },
          { id: '2', description: 'Bằng chủ trương của Nhà nước.' },
          { id: '3', description: 'Bằng chính sách của Nhà nước.' },
          { id: '4', description: 'Bằng uy tín của Nhà nước.' },
        ],
      },
      {
        id: 'exam5question3',
        title: 'Pháp luật không quy định về những việc nào dưới đây ?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Nên làm' },
          { id: '2', description: 'Được làm.' },
          { id: '3', description: 'Phải làm' },
          { id: '4', description: 'Không được làm.' },
        ],
      },
      {
        id: 'exam5question4',
        title: 'Một trong những đặc trưng của pháp luật thể hiện ở',
        answerId: '1',
        answers: [
          { id: '1', description: 'tính quyền lực, bắt buộc chung.' },
          { id: '2', description: 'tính hiện đại.' },
          { id: '3', description: 'tính cơ bản.' },
          { id: '4', description: 'tính truyền thống.' },
        ],
      },
      {
        id: 'exam5question5',
        title: 'Một trong những đặc trưng của pháp luật thể hiện ở',
        answerId: '1',
        answers: [
          { id: '1', description: 'tính quyền lực, bắt buộc chung.' },
          { id: '2', description: 'tính hiện đại.' },
          { id: '3', description: 'tính cơ bản.' },
          { id: '4', description: 'tính truyền thống.' },
        ],
      },
      {
        id: 'exam5question6',
        title:
          'Để quản lí xã hội, Nhà nước cần sử dụng phương tiện quan trọng nhất nào dưới đây?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Pháp luật' },
          { id: '2', description: 'Giáo dục.' },
          { id: '3', description: 'Thuyết phục ' },
          { id: '4', description: 'Tuyên truyền.' },
        ],
      },
      {
        id: 'exam5question7',
        title:
          'Pháp luật quy định về những việc được làm, việc phải làm và những việc nào dưới đây?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Không được làm ' },
          { id: '2', description: 'Không nên làm.' },
          { id: '3', description: 'Cần làm ' },
          { id: '4', description: 'Sẽ làm.' },
        ],
      },
      {
        id: 'exam5question8',
        title: 'Pháp luật có tính quy phạm phổ biến, vì pháp luật được áp dụng',
        answerId: '1',
        answers: [
          { id: '1', description: 'trong mọi lĩnh vực của đời sống xã hội.' },
          { id: '2', description: 'trong một số lĩnh vực quan trọng.' },
          { id: '3', description: 'đối với người vi phạm' },
          { id: '4', description: 'đối với người sản xuất kinh doanh.' },
        ],
      },
      {
        id: 'exam5question9',
        title:
          'Nội dung của tất cả các văn bản pháp luật đều phải phù hợp, không được trái với Hiến pháp là thể hiện đặc trưng nào dưới đây của pháp luật?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Tính xác định chặt chẽ về mặt hình thức.' },
          { id: '2', description: 'Tính quy phạm phổ biến.' },
          { id: '3', description: 'Tính phù hợp về mặt nôi dung.' },
          { id: '4', description: 'Tính bắt buộc chung.' },
        ],
      },
      {
        id: 'exam5question10',
        title:
          'Các quy phạm pháp luật do Nhà nước ban hành phù hợp với lợi ích của giai cấp cầm quyền là thể hiện bản chất nào dưới đây của phâp luật?',
        answerId: '2',
        answers: [
          { id: '1', description: ' Bản chất xã hội.' },
          { id: '2', description: 'Bản chất giai cấp.' },
          { id: '3', description: 'Bản chất nhân dân.' },
          { id: '4', description: 'Bản chất dân tộc.' },
        ],
      },
    ],
  },

  {
    id: 'exam6',
    difficulty: 'easy',
    describe: 'Giáo dục công dân',
    time: 8,
    totalPoints: 250,
    pointsOfMe: 0,
    rating: 4,
    questions: [
      {
        id: 'exam6question1',
        title:
          'Pháp luật là quy tắc xử sự chung, được áp dụng đối với tất cả mọi người là thể hiện đặc trưng nào dưới đây của pháp luật?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Tính quy phạm phổ biến.' },
          { id: '2', description: 'Tính phổ cập' },
          { id: '3', description: 'Tính rộng rãi.' },
          { id: '4', description: 'Tính nhân văn.' },
        ],
      },
      {
        id: 'exam6question2',
        title: 'Pháp luật do Nhà nước ban hành và đảm bảo thực hiện',
        answerId: '1',
        answers: [
          { id: '1', description: 'Bằng quyền lực Nhà nước.' },
          { id: '2', description: 'Bằng chủ trương của Nhà nước.' },
          { id: '3', description: 'Bằng chính sách của Nhà nước.' },
          { id: '4', description: 'Bằng uy tín của Nhà nước.' },
        ],
      },
      {
        id: 'exam6question3',
        title: 'Pháp luật không quy định về những việc nào dưới đây ?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Nên làm' },
          { id: '2', description: 'Được làm.' },
          { id: '3', description: 'Phải làm' },
          { id: '4', description: 'Không được làm.' },
        ],
      },
      {
        id: 'exam6question4',
        title: 'Một trong những đặc trưng của pháp luật thể hiện ở',
        answerId: '1',
        answers: [
          { id: '1', description: 'tính quyền lực, bắt buộc chung.' },
          { id: '2', description: 'tính hiện đại.' },
          { id: '3', description: 'tính cơ bản.' },
          { id: '4', description: 'tính truyền thống.' },
        ],
      },
      {
        id: 'exam6question5',
        title: 'Một trong những đặc trưng của pháp luật thể hiện ở',
        answerId: '1',
        answers: [
          { id: '1', description: 'tính quyền lực, bắt buộc chung.' },
          { id: '2', description: 'tính hiện đại.' },
          { id: '3', description: 'tính cơ bản.' },
          { id: '4', description: 'tính truyền thống.' },
        ],
      },
      {
        id: 'exam6question6',
        title:
          'Để quản lí xã hội, Nhà nước cần sử dụng phương tiện quan trọng nhất nào dưới đây?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Pháp luật' },
          { id: '2', description: 'Giáo dục.' },
          { id: '3', description: 'Thuyết phục ' },
          { id: '4', description: 'Tuyên truyền.' },
        ],
      },
      {
        id: 'exam6question7',
        title:
          'Pháp luật quy định về những việc được làm, việc phải làm và những việc nào dưới đây?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Không được làm ' },
          { id: '2', description: 'Không nên làm.' },
          { id: '3', description: 'Cần làm ' },
          { id: '4', description: 'Sẽ làm.' },
        ],
      },
      {
        id: 'exam6question8',
        title: 'Pháp luật có tính quy phạm phổ biến, vì pháp luật được áp dụng',
        answerId: '1',
        answers: [
          { id: '1', description: 'trong mọi lĩnh vực của đời sống xã hội.' },
          { id: '2', description: 'trong một số lĩnh vực quan trọng.' },
          { id: '3', description: 'đối với người vi phạm' },
          { id: '4', description: 'đối với người sản xuất kinh doanh.' },
        ],
      },
      {
        id: 'exam6question9',
        title:
          'Nội dung của tất cả các văn bản pháp luật đều phải phù hợp, không được trái với Hiến pháp là thể hiện đặc trưng nào dưới đây của pháp luật?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Tính xác định chặt chẽ về mặt hình thức.' },
          { id: '2', description: 'Tính quy phạm phổ biến.' },
          { id: '3', description: 'Tính phù hợp về mặt nôi dung.' },
          { id: '4', description: 'Tính bắt buộc chung.' },
        ],
      },
      {
        id: 'exam6question10',
        title:
          'Các quy phạm pháp luật do Nhà nước ban hành phù hợp với lợi ích của giai cấp cầm quyền là thể hiện bản chất nào dưới đây của phâp luật?',
        answerId: '2',
        answers: [
          { id: '1', description: ' Bản chất xã hội.' },
          { id: '2', description: 'Bản chất giai cấp.' },
          { id: '3', description: 'Bản chất nhân dân.' },
          { id: '4', description: 'Bản chất dân tộc.' },
        ],
      },
    ],
  },

  {
    id: 'exam7',
    difficulty: 'normal',
    describe: 'Kiểm tra bảo mật thông tin',
    time: 7,
    totalPoints: 250,
    pointsOfMe: 0,
    rating: 4,
    questions: [
      {
        id: 'exam7question1',
        title:
          'Pháp luật là quy tắc xử sự chung, được áp dụng đối với tất cả mọi người là thể hiện đặc trưng nào dưới đây của pháp luật?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Tính quy phạm phổ biến.' },
          { id: '2', description: 'Tính phổ cập' },
          { id: '3', description: 'Tính rộng rãi.' },
          { id: '4', description: 'Tính nhân văn.' },
        ],
      },
      {
        id: 'exam7question2',
        title: 'Pháp luật do Nhà nước ban hành và đảm bảo thực hiện',
        answerId: '1',
        answers: [
          { id: '1', description: 'Bằng quyền lực Nhà nước.' },
          { id: '2', description: 'Bằng chủ trương của Nhà nước.' },
          { id: '3', description: 'Bằng chính sách của Nhà nước.' },
          { id: '4', description: 'Bằng uy tín của Nhà nước.' },
        ],
      },
      {
        id: 'exam7question3',
        title: 'Pháp luật không quy định về những việc nào dưới đây ?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Nên làm' },
          { id: '2', description: 'Được làm.' },
          { id: '3', description: 'Phải làm' },
          { id: '4', description: 'Không được làm.' },
        ],
      },
      {
        id: 'exam7question4',
        title: 'Một trong những đặc trưng của pháp luật thể hiện ở',
        answerId: '1',
        answers: [
          { id: '1', description: 'tính quyền lực, bắt buộc chung.' },
          { id: '2', description: 'tính hiện đại.' },
          { id: '3', description: 'tính cơ bản.' },
          { id: '4', description: 'tính truyền thống.' },
        ],
      },
      {
        id: 'exam7question5',
        title: 'Một trong những đặc trưng của pháp luật thể hiện ở',
        answerId: '1',
        answers: [
          { id: '1', description: 'tính quyền lực, bắt buộc chung.' },
          { id: '2', description: 'tính hiện đại.' },
          { id: '3', description: 'tính cơ bản.' },
          { id: '4', description: 'tính truyền thống.' },
        ],
      },
      {
        id: 'exam7question6',
        title:
          'Để quản lí xã hội, Nhà nước cần sử dụng phương tiện quan trọng nhất nào dưới đây?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Pháp luật' },
          { id: '2', description: 'Giáo dục.' },
          { id: '3', description: 'Thuyết phục ' },
          { id: '4', description: 'Tuyên truyền.' },
        ],
      },
      {
        id: 'exam7question7',
        title:
          'Pháp luật quy định về những việc được làm, việc phải làm và những việc nào dưới đây?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Không được làm ' },
          { id: '2', description: 'Không nên làm.' },
          { id: '3', description: 'Cần làm ' },
          { id: '4', description: 'Sẽ làm.' },
        ],
      },
      {
        id: 'exam7question8',
        title: 'Pháp luật có tính quy phạm phổ biến, vì pháp luật được áp dụng',
        answerId: '1',
        answers: [
          { id: '1', description: 'trong mọi lĩnh vực của đời sống xã hội.' },
          { id: '2', description: 'trong một số lĩnh vực quan trọng.' },
          { id: '3', description: 'đối với người vi phạm' },
          { id: '4', description: 'đối với người sản xuất kinh doanh.' },
        ],
      },
      {
        id: 'exam7question9',
        title:
          'Nội dung của tất cả các văn bản pháp luật đều phải phù hợp, không được trái với Hiến pháp là thể hiện đặc trưng nào dưới đây của pháp luật?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Tính xác định chặt chẽ về mặt hình thức.' },
          { id: '2', description: 'Tính quy phạm phổ biến.' },
          { id: '3', description: 'Tính phù hợp về mặt nôi dung.' },
          { id: '4', description: 'Tính bắt buộc chung.' },
        ],
      },
      {
        id: 'exam7question10',
        title:
          'Các quy phạm pháp luật do Nhà nước ban hành phù hợp với lợi ích của giai cấp cầm quyền là thể hiện bản chất nào dưới đây của phâp luật?',
        answerId: '2',
        answers: [
          { id: '1', description: ' Bản chất xã hội.' },
          { id: '2', description: 'Bản chất giai cấp.' },
          { id: '3', description: 'Bản chất nhân dân.' },
          { id: '4', description: 'Bản chất dân tộc.' },
        ],
      },
    ],
  },

  {
    id: 'exam8',
    difficulty: 'normal',
    describe: 'Giáo dục công dân',
    time: 8,
    totalPoints: 250,
    pointsOfMe: 0,
    rating: 4,
    questions: [
      {
        id: 'exam8question1',
        title:
          'Pháp luật là quy tắc xử sự chung, được áp dụng đối với tất cả mọi người là thể hiện đặc trưng nào dưới đây của pháp luật?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Tính quy phạm phổ biến.' },
          { id: '2', description: 'Tính phổ cập' },
          { id: '3', description: 'Tính rộng rãi.' },
          { id: '4', description: 'Tính nhân văn.' },
        ],
      },
      {
        id: 'exam8question2',
        title: 'Pháp luật do Nhà nước ban hành và đảm bảo thực hiện',
        answerId: '1',
        answers: [
          { id: '1', description: 'Bằng quyền lực Nhà nước.' },
          { id: '2', description: 'Bằng chủ trương của Nhà nước.' },
          { id: '3', description: 'Bằng chính sách của Nhà nước.' },
          { id: '4', description: 'Bằng uy tín của Nhà nước.' },
        ],
      },
      {
        id: 'exam8question3',
        title: 'Pháp luật không quy định về những việc nào dưới đây ?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Nên làm' },
          { id: '2', description: 'Được làm.' },
          { id: '3', description: 'Phải làm' },
          { id: '4', description: 'Không được làm.' },
        ],
      },
      {
        id: 'exam8question4',
        title: 'Một trong những đặc trưng của pháp luật thể hiện ở',
        answerId: '1',
        answers: [
          { id: '1', description: 'tính quyền lực, bắt buộc chung.' },
          { id: '2', description: 'tính hiện đại.' },
          { id: '3', description: 'tính cơ bản.' },
          { id: '4', description: 'tính truyền thống.' },
        ],
      },
      {
        id: 'exam8question5',
        title: 'Một trong những đặc trưng của pháp luật thể hiện ở',
        answerId: '1',
        answers: [
          { id: '1', description: 'tính quyền lực, bắt buộc chung.' },
          { id: '2', description: 'tính hiện đại.' },
          { id: '3', description: 'tính cơ bản.' },
          { id: '4', description: 'tính truyền thống.' },
        ],
      },
      {
        id: 'exam8question6',
        title:
          'Để quản lí xã hội, Nhà nước cần sử dụng phương tiện quan trọng nhất nào dưới đây?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Pháp luật' },
          { id: '2', description: 'Giáo dục.' },
          { id: '3', description: 'Thuyết phục ' },
          { id: '4', description: 'Tuyên truyền.' },
        ],
      },
      {
        id: 'exam8question7',
        title:
          'Pháp luật quy định về những việc được làm, việc phải làm và những việc nào dưới đây?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Không được làm ' },
          { id: '2', description: 'Không nên làm.' },
          { id: '3', description: 'Cần làm ' },
          { id: '4', description: 'Sẽ làm.' },
        ],
      },
      {
        id: 'exam8question8',
        title: 'Pháp luật có tính quy phạm phổ biến, vì pháp luật được áp dụng',
        answerId: '1',
        answers: [
          { id: '1', description: 'trong mọi lĩnh vực của đời sống xã hội.' },
          { id: '2', description: 'trong một số lĩnh vực quan trọng.' },
          { id: '3', description: 'đối với người vi phạm' },
          { id: '4', description: 'đối với người sản xuất kinh doanh.' },
        ],
      },
      {
        id: 'exam8question9',
        title:
          'Nội dung của tất cả các văn bản pháp luật đều phải phù hợp, không được trái với Hiến pháp là thể hiện đặc trưng nào dưới đây của pháp luật?',
        answerId: '1',
        answers: [
          { id: '1', description: 'Tính xác định chặt chẽ về mặt hình thức.' },
          { id: '2', description: 'Tính quy phạm phổ biến.' },
          { id: '3', description: 'Tính phù hợp về mặt nôi dung.' },
          { id: '4', description: 'Tính bắt buộc chung.' },
        ],
      },
      {
        id: 'exam8question10',
        title:
          'Các quy phạm pháp luật do Nhà nước ban hành phù hợp với lợi ích của giai cấp cầm quyền là thể hiện bản chất nào dưới đây của phâp luật?',
        answerId: '2',
        answers: [
          { id: '1', description: ' Bản chất xã hội.' },
          { id: '2', description: 'Bản chất giai cấp.' },
          { id: '3', description: 'Bản chất nhân dân.' },
          { id: '4', description: 'Bản chất dân tộc.' },
        ],
      },
    ],
  },
];
