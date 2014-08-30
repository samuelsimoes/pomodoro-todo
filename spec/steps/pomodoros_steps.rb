module PomodorosSteps
  step 'I fill the pomodoro description and submit' do
    fill_in 'Criar um novo pomodoro...', with: 'Super task!!'
    find('.new-pomodoro-form input[type=text]').native.send_key(:Enter)
  end

  step 'the new pomodoro is created' do
    expect(page).to have_field('Criar um novo pomodoro...', with: '')
    expect(page).to have_content('Super task!!')
  end

  step 'I click in pomodoro "delete" button' do
    within '.pomodoro-list-item:nth-child(1)' do
      click_on 'Excluir'
    end
  end

  step 'the pomodoro is deleted' do
    expect(page).to_not have_content('My important task!')
  end

  step 'I click in pomodoro description and edit the description' do
    find('.pomodoro-list-item:nth-child(1) p').click

    within '.pomodoro-list-item:nth-child(1)' do
      field = find('input[type=text]').native
      field.send_keys(' edited')
      field.send_key(:Enter)
    end
  end

  step 'the pomodoro list is edited' do
    expect(page).to_not have_content('My important task! edited')
  end
end

RSpec.configure { |c| c.include PomodorosSteps }
