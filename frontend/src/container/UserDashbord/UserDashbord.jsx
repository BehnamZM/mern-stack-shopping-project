import React from 'react'
import './UserDashbord.css'

function UserDashbord() {
  return (
    <div className="profile">
      <div className="profile-body container">
        <div className="user-profile-menu">
          <ul>
            <h5>سلام بهنام عزیز!</h5>
            <li><a href="">پیشخوان</a></li>
            <li><a href="">سفارشات</a></li>
            <li><a href="">علاقه مندی ها</a></li>
            <li><a href="">تراکنشها</a></li>
            <li><a href="">خروج</a></li>
          </ul>
        </div>
        <div className="user-profile-description">
          <h4>به پروفایل خودتون خوش اومدید!</h4>
        </div>
      </div>
    </div>
  )
}

export default UserDashbord