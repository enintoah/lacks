require 'test_helper'

class ConversationControllerTest < ActionDispatch::IntegrationTest
  test "should get Messages" do
    get conversation_Messages_url
    assert_response :success
  end

end
