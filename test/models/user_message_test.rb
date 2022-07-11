# == Schema Information
#
# Table name: user_messages
#
#  id              :bigint           not null, primary key
#  author_id       :integer          not null
#  conversation_id :integer          not null
#  recipient_id    :integer          not null
#  body            :text             not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
require 'test_helper'

class UserMessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
